"use client";

import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [form, setForm] = useState({
    client_name: "",
    client_email: "",
    client_phone: "",
    service_type: "Wedding",
    booking_date: "",
    booking_time: "",
    location: "",
    notes: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/bookings/",
        form
      );

      setMessage("✅ Booking submitted successfully!");

      setForm({
        client_name: "",
        client_email: "",
        client_phone: "",
        service_type: "Wedding",
        booking_date: "",
        booking_time: "",
        location: "",
        notes: "",
      });

    } catch (error) {
        console.error(error);

        console.log(error.response.data);

        setMessage(JSON.stringify(error.response.data));
}
  };

  return (
    <section id="booking" className="bg-gray-100">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-3">
          Schedule Your Shoot
        </h2>

        <p className="text-center text-gray-700 mb-10">
          Fill in the form below to request a photography session.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-8 space-y-5"
        >
          <input
            type="text"
            name="client_name"
            placeholder="Full Name"
            value={form.client_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="client_email"
            placeholder="Email Address"
            value={form.client_email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="client_phone"
            placeholder="Phone Number"
            value={form.client_phone}
            onChange={handleChange}
            required
          />

          <select
            name="service_type"
            value={form.service_type}
            onChange={handleChange}
          >
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Graduation</option>
            <option>Pre-Wedding</option>
            <option>Family Portrait</option>
            <option>Corporate</option>
            <option>Passport</option>
          </select>

          <input
            type="date"
            name="booking_date"
            value={form.booking_date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="booking_time"
            value={form.booking_time}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Preferred Shoot Location"
            value={form.location}
            onChange={handleChange}
            required
          />

          <textarea
            name="notes"
            rows="4"
            placeholder="Additional Notes (Optional)"
            value={form.notes}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition"
          >
            Schedule Shoot
          </button>

          {message && (
            <div className="text-center font-medium text-green-700 mt-4">
              {message}
            </div>
          )}
        </form>

      </div>
    </section>
  );
}