from django.apps import AppConfig


class EncountersConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "union_platform.modules.encounters"
    label = "union_encounters"
    verbose_name = "Union — Encounters"
