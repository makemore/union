from django.contrib import admin

from .models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("id", "event_type", "source_node", "actor", "created_at")
    list_filter = ("event_type",)
    search_fields = ("event_type", "id")
    readonly_fields = (
        "id", "event_type", "payload", "source_node", "actor", "created_at",
    )
    ordering = ("-created_at",)

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False
