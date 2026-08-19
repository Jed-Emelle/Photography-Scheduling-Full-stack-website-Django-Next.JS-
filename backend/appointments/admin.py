from django.contrib import admin
from .models import Booking


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = (
        "client_name",
        "service_type",
        "booking_date",
        "booking_time",
        "status",
    )

    list_filter = (
        "status",
        "service_type",
    )

    search_fields = (
        "client_name",
        "client_email",
        "client_phone",
    )

    ordering = ("-created_at",)