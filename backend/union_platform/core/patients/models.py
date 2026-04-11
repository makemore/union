"""
Patient model — placeholder with explicit home-node ownership.

The Patient record is intentionally minimal at this stage. The key
architectural decision it encodes is *data ownership*: every patient
has a home_node — the node that is authoritative for their record.
"""

import uuid

from django.db import models
from django.utils import timezone


class Patient(models.Model):
    """
    A patient known to the Union network.

    Fields:
        id          — UUID primary key, globally unique.
        home_node   — The node that owns/manages this patient record.
        given_name  — First / given name.
        family_name — Last / family name.
        date_of_birth — Date of birth (nullable until known).
        created_at / updated_at — Timestamps.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    home_node = models.ForeignKey(
        "union_nodes.Node",
        on_delete=models.PROTECT,
        related_name="patients",
        help_text="The node that is authoritative for this patient record.",
    )
    given_name = models.CharField(max_length=255, blank=True, default="")
    family_name = models.CharField(max_length=255, blank=True, default="")
    date_of_birth = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["family_name", "given_name"]

    def __str__(self):
        name = f"{self.given_name} {self.family_name}".strip() or "(unnamed)"
        return f"{name} [{self.id.hex[:8]}]"
