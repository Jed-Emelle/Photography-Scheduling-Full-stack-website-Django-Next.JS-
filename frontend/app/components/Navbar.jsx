export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-yellow-500">
            Lumina Photography
          </h1>
          <p className="text-sm text-gray-300">
            Photography Booking System
          </p>
        </div>

        <div className="flex gap-6 text-sm md:text-base">
          <a
            href="#services"
            className="hover:text-yellow-500 transition-colors"
          >
            Services
          </a>

          <a
            href="#booking"
            className="hover:text-yellow-500 transition-colors"
          >
            Book
          </a>

          <a
            href="#bookings"
            className="hover:text-yellow-500 transition-colors"
          >
            Bookings
          </a>
        </div>

      </div>
    </nav>
  );
}