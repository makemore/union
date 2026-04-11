from django.contrib import admin

from .models import Node


@admin.register(Node)
class NodeAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "endpoint", "is_managed", "created_at")
    list_filter = ("role", "is_managed")
    search_fields = ("name",)
    readonly_fields = ("id", "created_at", "updated_at")
