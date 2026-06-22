export default function WhyChooseUs() {
  const features = [
    {
      title: "Global Sourcing",
      desc: "Access to premium scientific materials and specialty chemicals from trusted worldwide suppliers.",
      icon: "🌍",
    },
    {
      title: "CRO/CDMO Expertise",
      desc: "End-to-end research, development and manufacturing support for pharmaceutical projects.",
      icon: "🧪",
    },
    {
      title: "Quality Assurance",
      desc: "Products sourced and delivered with strict quality standards and documentation.",
      icon: "✅",
    },
    {
      title: "Technical Consulting",
      desc: "Expert scientific guidance for research, product selection and development projects.",
      icon: "💡",
    },
    {
      title: "Fast Delivery",
      desc: "Reliable logistics network ensuring timely delivery of products worldwide.",
      icon: "🚚",
    },
    {
      title: "Regulatory Support",
      desc: "Documentation and compliance support for pharmaceutical and biotechnology industries.",
      icon: "📋",
    },
  ];

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Why Choose SVSS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted Scientific Partner
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            We combine scientific expertise, global sourcing and
            industry-focused solutions to support innovation and
            accelerate research success.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 hover:bg-blue-950 transition-all duration-500 shadow-md hover:shadow-2xl"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 group-hover:text-slate-300">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}