from django.apps import AppConfig


class NodesConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "union_platform.core.nodes"
    label = "union_nodes"
    verbose_name = "Union — Nodes"
