"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);

  async function getBookings() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/bookings/"
      );

      setBookings(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section id="bookings" className="bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-3">
          Recent Bookings
        </h2>

        <p className="text-center text-gray-700 mb-10">
          The latest photography session requests.
        </p>

        {bookings.length === 0 ? (
          <div className="text-center text-gray-500">
            No bookings available.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {booking.client_name}
                </h3>

                <p className="mt-2">
                  <strong>Service:</strong> {booking.service_type}
                </p>

                <p>
                  <strong>Date:</strong> {booking.booking_date}
                </p>

                <p>
                  <strong>Time:</strong> {booking.booking_time}
                </p>

                <p>
                  <strong>Location:</strong> {booking.location}
                </p>

                <div className="mt-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "Completed"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}