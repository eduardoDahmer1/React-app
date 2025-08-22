const services = [
  { title: "Fast Performance", desc: "Optimized React components for lightning speed." },
  { title: "Responsive Design", desc: "Looks great on any device, mobile-first approach." },
  { title: "Modern UI", desc: "Clean and modern interfaces with TailwindCSS." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
