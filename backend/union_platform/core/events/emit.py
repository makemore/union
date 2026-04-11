"""
Event emission utility.

Provides a simple, consistent way to record events from anywhere in the
codebase. No queues or async transport yet — events are written directly
to the database as structured, append-only records.

Usage:
    from union_platform.core.events.emit import emit_event

    emit_event(
        event_type="patient.registered",
        payload={"patient_id": str(patient.id)},
        actor=request.user,
    )
"""

from __future__ import annotations

import logging
from typing import Any, Dict, Optional

from django.contrib.auth import get_user_model

from .models import Event

logger = logging.getLogger("union_platform.events")
User = None  # Lazy-loaded


def _get_self_node():
    """Return the Node marked as is_self, or None."""
    from union_platform.core.nodes.models import Node

    try:
        return Node.objects.filter(is_self=True).first()
    except Exception:
        return None


def emit_event(
    event_type: str,
    payload: Optional[Dict[str, Any]] = None,
    actor=None,
    source_node=None,
) -> Event:
    """
    Create and persist an immutable Event record.

    Args:
        event_type: Dotted identifier, e.g. "patient.registered".
        payload:    Arbitrary JSON-serialisable data.
        actor:      The user who triggered the event (or None).
        source_node: Override the originating Node (defaults to self-node).

    Returns:
        The created Event instance.
    """
    if source_node is None:
        source_node = _get_self_node()

    event = Event.objects.create(
        event_type=event_type,
        payload=payload or {},
        actor=actor,
        source_node=source_node,
    )
    logger.info("Event emitted: %s (%s)", event.event_type, event.id)
    return event
