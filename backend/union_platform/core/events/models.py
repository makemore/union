"""
Append-only, immutable Event model.

Every meaningful action in the Union network is recorded as an Event.
Events are the foundation of cross-node communication and auditability.
They are never updated or deleted — only appended.
"""

import uuid

from django.conf import settings
from django.db import models
from django.utils import timezone


class Event(models.Model):
    """
    An immutable record of something that happened in the system.

    Fields:
        id          — UUID primary key (globally unique across nodes).
        event_type  — Dotted identifier, e.g. "patient.registered",
                      "encounter.started", "referral.sent".
        payload     — Arbitrary JSON data describing the event.
        source_node — FK to the Node that originated this event (nullable
                      until nodes are fully configured).
        actor       — The user who triggered the event (nullable for
                      system-generated events).
        created_at  — Timestamp, set once on creation, never changed.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_type = models.CharField(
        max_length=255,
        db_index=True,
        help_text="Dotted event identifier, e.g. 'patient.registered'.",
    )
    payload = models.JSONField(
        default=dict,
        blank=True,
        help_text="Structured data describing the event.",
    )
    source_node = models.ForeignKey(
        "union_nodes.Node",
        on_delete=models.PROTECT,
        null=True,
        blank=True,
        related_name="events",
        help_text="The node that originated this event.",
    )
    actor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="union_events",
        help_text="User who triggered the event, if applicable.",
    )
    created_at = models.DateTimeField(default=timezone.now, editable=False, db_index=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["event_type", "-created_at"]),
        ]

    def __str__(self):
        return f"[{self.event_type}] {self.id} @ {self.created_at:%Y-%m-%d %H:%M:%S}"

    def save(self, *args, **kwargs):
        # Enforce immutability: prevent updates to existing events.
        if self._state.adding is False:
            raise ValueError("Event records are immutable and cannot be updated.")
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        raise ValueError("Event records are immutable and cannot be deleted.")
