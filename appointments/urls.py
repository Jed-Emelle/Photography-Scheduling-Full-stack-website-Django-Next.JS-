from django.urls import path
from . import views

urlpatterns = [
    path("", views.bookings),
    path("<int:pk>/", views.booking_detail),
]