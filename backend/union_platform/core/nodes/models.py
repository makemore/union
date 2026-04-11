"""
Node model — represents a deployment in the Union network.

Each hospital, clinic, or backbone service runs as a Node.
Nodes have a unique identity, a role, and an endpoint for
inter-node communication.
"""

import uuid

from django.db import models
from django.utils import timezone


class Node(models.Model):
    """
    A deployment (instance) in the Union network.

    Fields:
        id       — UUID primary key, globally unique.
        name     — Human-readable label, e.g. "St Mary's Hospital".
        role     — The role this node plays: 'local' or 'backbone'.
        endpoint — URL for inter-node communication (nullable until configured).
        is_self  — True for the single row representing *this* deployment.
        created_at / updated_at — Timestamps.
    """

    class Role(models.TextChoices):
        LOCAL = "local", "Local Node"
        BACKBONE = "backbone", "Backbone Node"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=20, choices=Role.choices)
    endpoint = models.URLField(
        blank=True,
        default="",
        help_text="Base URL for this node's API, used for inter-node messaging.",
    )
    is_self = models.BooleanField(
        default=False,
        help_text="Marks the row representing the current deployment.",
    )
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            # At most one row may have is_self=True.
            models.UniqueConstraint(
                fields=["is_self"],
                condition=models.Q(is_self=True),
                name="unique_self_node",
            ),
        ]
        ordering = ["name"]

    def __str__(self):
        marker = " (self)" if self.is_self else ""
        return f"{self.name} [{self.get_role_display()}]{marker}"
