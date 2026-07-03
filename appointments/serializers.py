from rest_framework import serializers
from .models import Booking
from datetime import date


class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = "__all__"

    def validate_booking_date(self, value):
        if value < date.today():
            raise serializers.ValidationError(
                "Booking date cannot be in the past."
            )
        return value

    def validate(self, data):
        exists = Booking.objects.filter(
            booking_date=data["booking_date"],
            booking_time=data["booking_time"],
        )

        # Ignore the current record when updating
        if self.instance:
            exists = exists.exclude(pk=self.instance.pk)

        if exists.exists():
            raise serializers.ValidationError(
                "This time slot is already booked."
            )

        return data