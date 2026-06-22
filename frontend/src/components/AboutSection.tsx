export default function AboutSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium">
            About SVSS
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Advancing Science
            <br />
            Through Innovation
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Sri Vasavi Scientific Solutions is a trusted partner for
            pharmaceutical, biotechnology and research organizations,
            delivering specialty chemicals, CRO/CDMO solutions and
            advanced scientific materials worldwide.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Company Overview */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:scale-[1.02] transition">

            <h3 className="text-3xl font-bold text-white">
              Company Overview
            </h3>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Established in 2019, Sri Vasavi Scientific Solutions
              specializes in supplying high-quality specialty chemicals,
              pharmaceutical intermediates, peptide and oligo chemicals,
              herbal extracts, impurities and advanced research compounds.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              We support research institutions, pharmaceutical companies,
              biotechnology organizations and industrial innovators with
              reliable products and scientific expertise.
            </p>

          </div>

          {/* Mission & Vision */}
          <div className="grid gap-8">

            <div className="bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-cyan-300">
                Our Mission
              </h3>

              <p className="mt-4 text-slate-300">
                To empower scientific discovery and industrial growth by
                delivering innovative, reliable and high-quality research
                solutions.
              </p>

            </div>

            <div className="bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-blue-300">
                Our Vision
              </h3>

              <p className="mt-4 text-slate-300">
                To become a globally recognized scientific solutions
                partner, accelerating innovation in pharmaceuticals,
                biotechnology and life sciences.
              </p>

            </div>

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition">
            <h3 className="text-5xl font-bold text-cyan-300">
              7+
            </h3>
            <p className="mt-3 text-slate-300">
              Years Experience
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition">
            <h3 className="text-5xl font-bold text-cyan-300">
              100+
            </h3>
            <p className="mt-3 text-slate-300">
              Global Clients
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition">
            <h3 className="text-5xl font-bold text-cyan-300">
              500+
            </h3>
            <p className="mt-3 text-slate-300">
              Products & Solutions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition">
            <h3 className="text-5xl font-bold text-cyan-300">
              20+
            </h3>
            <p className="mt-3 text-slate-300">
              Countries Served
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}