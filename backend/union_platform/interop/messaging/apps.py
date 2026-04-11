from django.apps import AppConfig


class MessagingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "union_platform.interop.messaging"
    label = "union_messaging"
    verbose_name = "Union — Messaging"
