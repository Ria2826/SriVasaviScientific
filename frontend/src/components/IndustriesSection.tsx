export default function IndustriesSection() {
  const industries = [
    {
      title: "Pharmaceutical Industry",
      icon: "💊",
    },
    {
      title: "Biotechnology",
      icon: "🧬",
    },
    {
      title: "Research Laboratories",
      icon: "🔬",
    },
    {
      title: "Universities & Academia",
      icon: "🎓",
    },
    {
      title: "Cosmetics Industry",
      icon: "✨",
    },
    {
      title: "Nutraceutical Industry",
      icon: "🌿",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-950">

      {/* Background glow */}
      <div className="absolute top-0 left-0 h-96 w-96 bg-blue-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-500/20 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm">
            Global Industries
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Industries We Serve
          </h2>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto">
            Supporting pharmaceutical, biotechnology and research
            organizations with innovative scientific products
            and services worldwide.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-500"
            >
              <div className="text-6xl">
                {industry.icon}
              </div>

              <h3 className="mt-6 text-2xl text-white font-bold">
                {industry.title}
              </h3>

            </div>
          ))}

        </div>

        <div className="mt-20 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-cyan-300 text-5xl font-bold">
                20+
              </h2>
              <p className="text-slate-300 mt-2">
                Countries
              </p>
            </div>

            <div>
              <h2 className="text-cyan-300 text-5xl font-bold">
                100+
              </h2>
              <p className="text-slate-300 mt-2">
                Global Clients
              </p>
            </div>

            <div>
              <h2 className="text-cyan-300 text-5xl font-bold">
                500+
              </h2>
              <p className="text-slate-300 mt-2">
                Products
              </p>
            </div>

            <div>
              <h2 className="text-cyan-300 text-5xl font-bold">
                24/7
              </h2>
              <p className="text-slate-300 mt-2">
                Support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}