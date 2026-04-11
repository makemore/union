"""
Node model — represents a deployment in the Union network.

Each hospital, clinic, or backbone service runs as a Node.
Nodes have a unique identity, a role, and an endpoint for
inter-node communication.

A single Union install can manage one node or many. The ``is_managed``
flag marks which nodes this install operates on behalf of. An install
managing one hospital is a single-node deployment. An NHS trust running
three hospitals from one install is multi-node. In theory, a single
install could manage every node in the country — designing for that
possibility ensures data ownership, scoping, and isolation are correct
at every scale.
"""

import uuid

from django.db import models
from django.utils import timezone


class Node(models.Model):
    """
    A node in the Union network.

    Every meaningful entity in the network — a hospital, a clinic, a
    backbone routing service — is represented as a Node. Nodes that
    this install *operates on behalf of* are marked ``is_managed=True``.
    Remote nodes (peers discovered through the network) have
    ``is_managed=False``.

    Fields:
        id         — UUID primary key, globally unique across the network.
        name       — Human-readable label, e.g. "St Mary's Hospital".
        role       — The role this node plays: 'local' or 'backbone'.
        endpoint   — URL for inter-node communication.
        is_managed — True for nodes this install is responsible for.
                     False for remote/peer nodes known to the network.
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
    is_managed = models.BooleanField(
        default=False,
        help_text=(
            "True for nodes this install operates on behalf of. "
            "A single-node deployment has one managed node. "
            "A multi-node deployment (e.g. an NHS trust) may have several."
        ),
    )
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        marker = " (managed)" if self.is_managed else ""
        return f"{self.name} [{self.get_role_display()}]{marker}"
