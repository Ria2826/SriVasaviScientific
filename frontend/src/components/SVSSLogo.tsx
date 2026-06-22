export default function SVSSLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="70"
        height="50"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="svssGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
        </defs>

        {/* Infinity Shape */}
        <path
          d="M50 60
          C50 25,100 25,100 60
          C100 95,150 95,150 60
          C150 25,100 25,100 60
          C100 95,50 95,50 60"
          stroke="url(#svssGradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />

        {/* Particle Dots */}
        <circle cx="145" cy="30" r="4" fill="#0EA5E9" />
        <circle cx="155" cy="25" r="3" fill="#22C55E" />
        <circle cx="165" cy="20" r="2" fill="#0EA5E9" />
        <circle cx="170" cy="15" r="1.5" fill="#22C55E" />
      </svg>

      <div>
        <h1 className="font-extrabold text-2xl tracking-wide bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">
          SVSS
        </h1>

        <p className="text-xs text-slate-500 font-medium">
          Sri Vasavi Scientific Solutions
        </p>
      </div>
    </div>
  );
}