from django.apps import AppConfig


class RoutingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "union_platform.interop.routing"
    label = "union_routing"
    verbose_name = "Union — Routing"
