from django.apps import AppConfig


class TasksConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "union_platform.modules.tasks"
    label = "union_tasks"
    verbose_name = "Union — Tasks"
