export default function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6 max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Capture Your Best Moments
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Book professional photography sessions for weddings,
            birthdays, graduations, family portraits and more.
          </p>

          <a
            href="#booking"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition"
          >
            Book a Session
          </a>

        </div>
      </div>
    </section>
  );
}