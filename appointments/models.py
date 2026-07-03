from django.db import models


class Booking(models.Model):
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Confirmed", "Confirmed"),
        ("Completed", "Completed"),
        ("Cancelled", "Cancelled"),
    ]

    SERVICE_CHOICES = [
        ("Wedding", "Wedding"),
        ("Birthday", "Birthday"),
        ("Graduation", "Graduation"),
        ("Pre-Wedding", "Pre-Wedding"),
        ("Family Portrait", "Family Portrait"),
        ("Corporate", "Corporate"),
        ("Passport", "Passport"),
    ]

    client_name = models.CharField(max_length=100)
    client_email = models.EmailField()
    client_phone = models.CharField(max_length=15)

    service_type = models.CharField(
        max_length=50,
        choices=SERVICE_CHOICES
    )

    booking_date = models.DateField()
    booking_time = models.TimeField()

    location = models.CharField(max_length=255)

    notes = models.TextField(blank=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (
            f"{self.client_name} | "
            f"{self.service_type} | "
            f"{self.booking_date}"
        )