from django.apps import AppConfig


class PatientsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "union_platform.core.patients"
    label = "union_patients"
    verbose_name = "Union — Patients"
