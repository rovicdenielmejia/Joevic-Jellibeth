const Hero = () => {
  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="text-center space-y-4">
        {/* Names */}
        <div className="space-y-1">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gold-400 tracking-wide">
            Jover
          </h1>
          <p className="text-gold-500 text-2xl">&</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gold-400 tracking-wide">
            Anjelica
          </h1>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="w-12 h-px bg-gold-500/50"></div>
          <svg className="w-5 h-5 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0-4.418 4.477-8 10-8s10 3.582 10 8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11M8 7l4-4 4 4M8 15l4 4 4-4" />
          </svg>
          <div className="w-12 h-px bg-gold-500/50"></div>
        </div>

        {/* Tagline */}
        <p className="font-serif text-xl text-ivory-100 italic">
          "Sail Away With Us"
        </p>

        {/* Details */}
        <div className="bg-emerald-800/50 rounded-2xl p-5 border border-gold-500/20 space-y-4 mt-4">
          {/* Date & Time */}
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <p className="text-gold-500 font-medium">Date</p>
              <p className="text-ivory-100">April 25, 2026</p>
            </div>
            <div className="w-px h-10 bg-gold-500/30"></div>
            <div className="text-center">
              <p className="text-gold-500 font-medium">Time</p>
              <p className="text-ivory-100">1:00 PM</p>
            </div>
          </div>

          {/* Ceremony */}
          <div className="pt-3 border-t border-gold-500/20">
            <p className="text-gold-500 text-xs uppercase tracking-wider mb-1">Ceremony</p>
            <p className="text-ivory-100 text-sm leading-relaxed">
              St. Augustine of Hippo Parish Church,<br />
              Rizal, Saguday, Quirino
            </p>
          </div>

          {/* Reception */}
          <div>
            <p className="text-gold-500 text-xs uppercase tracking-wider mb-1">Reception</p>
            <p className="text-ivory-100 text-sm leading-relaxed">
              Dea Myles Events and Function,<br />
              Santiago City, Isabela
            </p>
          </div>
        </div>

        {/* Find Your Seat */}
        <div className="pt-4">
          <h2 className="font-serif text-2xl font-semibold text-gold-400">
            "Find your seat instantly"
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero