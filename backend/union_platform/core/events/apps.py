from django.apps import AppConfig


class EventsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "union_platform.core.events"
    label = "union_events"
    verbose_name = "Union — Events"
