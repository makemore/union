"""
Role-based app composition for Union Platform.

The same codebase supports multiple deployment roles. Each role loads
a different set of Django apps, enforced structurally via app
inclusion/exclusion — not runtime conditionals in business logic.

Roles:
    local    — Hospital/clinic node. Loads clinical modules + interop client.
    backbone — Coordination/routing node. Loads interop routing, no clinical modules.
"""

from typing import List


# ---------------------------------------------------------------------------
# App registries per domain
# ---------------------------------------------------------------------------

# Core apps: loaded in ALL roles
CORE_APPS: List[str] = [
    "union_platform.core.events",
    "union_platform.core.nodes",
    "union_platform.core.patients",
]

# Clinical module apps: loaded only in LOCAL role
MODULE_APPS: List[str] = [
    "union_platform.modules.encounters",
    "union_platform.modules.tasks",
    "union_platform.modules.referrals",
]

# Interop apps by role
INTEROP_BACKBONE_APPS: List[str] = [
    "union_platform.interop.routing",
    "union_platform.interop.messaging",
]

INTEROP_CLIENT_APPS: List[str] = [
    "union_platform.interop.messaging",
]

# ---------------------------------------------------------------------------
# Role → app mapping
# ---------------------------------------------------------------------------

VALID_ROLES = ("local", "backbone")

_ROLE_APPS = {
    "local": CORE_APPS + MODULE_APPS + INTEROP_CLIENT_APPS,
    "backbone": CORE_APPS + INTEROP_BACKBONE_APPS,
}


def get_installed_apps(role: str) -> List[str]:
    """
    Return the list of Union Platform Django apps for the given *role*.

    Args:
        role: One of 'local' or 'backbone'.

    Returns:
        Ordered list of dotted app labels to add to INSTALLED_APPS.

    Raises:
        ValueError: If *role* is not recognised.
    """
    role = role.lower().strip()
    if role not in VALID_ROLES:
        raise ValueError(
            f"Unknown SYSTEM_ROLE '{role}'. Must be one of: {VALID_ROLES}"
        )
    return list(_ROLE_APPS[role])
