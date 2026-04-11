"""
Event emission utility.

Provides a simple, consistent way to record events from anywhere in the
codebase. No queues or async transport yet — events are written directly
to the database as structured, append-only records.

Because a single install can manage multiple nodes, the ``source_node``
must always be provided — there is no assumption of "one self node."

Usage:
    from union_platform.core.events.emit import emit_event

    emit_event(
        event_type="patient.registered",
        payload={"patient_id": str(patient.id)},
        source_node=hospital_node,
        actor=request.user,
    )
"""

from __future__ import annotations

import logging
from typing import Any, Dict, Optional

from .models import Event

logger = logging.getLogger("union_platform.events")


def emit_event(
    event_type: str,
    payload: Optional[Dict[str, Any]] = None,
    source_node=None,
    actor=None,
) -> Event:
    """
    Create and persist an immutable Event record.

    Args:
        event_type:  Dotted identifier, e.g. "patient.registered".
        payload:     Arbitrary JSON-serialisable data.
        source_node: The Node this event originates from. Required in
                     multi-node deployments; optional only when there is
                     exactly one managed node (in which case it is
                     resolved automatically).
        actor:       The user who triggered the event (or None).

    Returns:
        The created Event instance.

    Raises:
        ValueError: If source_node is not provided and the install
                    manages zero or more than one node.
    """
    if source_node is None:
        source_node = _resolve_default_node()

    event = Event.objects.create(
        event_type=event_type,
        payload=payload or {},
        actor=actor,
        source_node=source_node,
    )
    logger.info("Event emitted: %s (%s)", event.event_type, event.id)
    return event


def _resolve_default_node():
    """
    Auto-resolve source_node when not explicitly provided.

    Only succeeds when the install manages exactly one node — the
    common single-node deployment case. Multi-node installs must
    always pass source_node explicitly.
    """
    from union_platform.core.nodes.models import Node

    managed = list(Node.objects.filter(is_managed=True)[:2])

    if len(managed) == 1:
        return managed[0]

    if len(managed) == 0:
        logger.warning(
            "emit_event called without source_node and no managed nodes exist."
        )
        return None

    raise ValueError(
        "This install manages multiple nodes. "
        "You must pass source_node explicitly to emit_event()."
    )
