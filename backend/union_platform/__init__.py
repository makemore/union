"""
Union Platform — modular infrastructure for healthcare systems.

A pip-installable Django platform package providing core primitives,
clinical modules, and interoperability layers. Designed to run in
different roles (local node, backbone node) from a single codebase.
"""

__version__ = "0.1.0"

default_app_config = None  # Apps are registered via roles.get_installed_apps()
