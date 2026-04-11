from django.contrib import admin

from .models import Patient


@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ("id", "given_name", "family_name", "home_node", "date_of_birth", "created_at")
    list_filter = ("home_node",)
    search_fields = ("given_name", "family_name")
    readonly_fields = ("id", "created_at", "updated_at")
