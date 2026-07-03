from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Booking
from .serializers import BookingSerializer


@api_view(["GET", "POST"])
def bookings(request):

    if request.method == "GET":
        bookings = Booking.objects.all().order_by("-created_at")
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = BookingSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


@api_view(["GET", "PUT", "DELETE"])
def booking_detail(request, pk):

    try:
        booking = Booking.objects.get(pk=pk)
    except Booking.DoesNotExist:
        return Response(status=404)

    if request.method == "GET":
        serializer = BookingSerializer(booking)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = BookingSerializer(
            booking,
            data=request.data
        )

        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    "message": "Booking Created Successfully.",
                    "booking": BookingSerializer(booking).data,
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            {
                "message": "Booking could not be created.",
                "errors": serializer.errors,
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    elif request.method == "DELETE":
        booking.delete()
        return Response(status=204)