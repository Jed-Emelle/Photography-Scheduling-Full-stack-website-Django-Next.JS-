import {
  FaCamera,
  FaRing,
  FaBirthdayCake,
  FaGraduationCap,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

const services = [
  {
    title: "Wedding Photography",
    icon: <FaRing size={40} />,
    description:
      "Capture every unforgettable moment of your special day.",
  },
  {
    title: "Birthday Photography",
    icon: <FaBirthdayCake size={40} />,
    description:
      "Celebrate birthdays with vibrant and memorable photographs.",
  },
  {
    title: "Graduation Photography",
    icon: <FaGraduationCap size={40} />,
    description:
      "Celebrate your academic achievements with professional portraits.",
  },
  {
    title: "Family Portraits",
    icon: <FaUsers size={40} />,
    description:
      "Create timeless memories with your loved ones.",
  },
  {
    title: "Corporate Photography",
    icon: <FaBriefcase size={40} />,
    description:
      "Professional headshots and branding for businesses.",
  },
  {
    title: "Custom Photoshoots",
    icon: <FaCamera size={40} />,
    description:
      "Need something unique? We'll create a session tailored to you.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-3">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We provide professional photography services for every special occasion.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-yellow-500 mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}