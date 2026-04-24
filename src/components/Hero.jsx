const Hero = () => {
  return (
    <section className="py-6 px-4 animate-fade-in">
      <div className="text-center space-y-5">
        {/* Top small text */}
        <p className="text-secondary text-sm uppercase tracking-[0.2em] font-sans">
          Together with their families
        </p>

        {/* Main names */}
        <div className="space-y-1">
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-primary tracking-wide">
            Sef & Nelle
          </h1>
          <p className="font-serif text-2xl text-secondary italic">
            Wedding Reception
          </p>
        </div>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="w-8 h-px bg-taupe-300"></div>
          <svg className="w-4 h-4 text-rose-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="w-8 h-px bg-taupe-300"></div>
        </div>

        {/* Event Details Card */}
        <div className="bg-white rounded-xl p-5 border border-border space-y-4 shadow-soft">
          {/* Date & Time */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="text-center">
              <p className="text-secondary text-xs uppercase tracking-wider mb-1">Date</p>
              <p className="text-primary font-medium">Saturday</p>
              <p className="text-primary">25th of April 2026</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="text-secondary text-xs uppercase tracking-wider mb-1">Time</p>
              <p className="text-primary font-medium">Four o'clock</p>
              <p className="text-primary">in the afternoon</p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-px bg-border"></div>
          </div>

          {/* Venue */}
          <div>
            <p className="text-secondary text-xs uppercase tracking-wider text-center mb-1">Venue</p>
            <p className="text-primary text-center font-medium">Villa Evangeline</p>
            <p className="text-secondary text-center text-sm">Patul, Santiago City, Isabela</p>
          </div>
        </div>

        {/* Find Your Seat */}
        <div className="pt-2">
          <h2 className="font-serif text-xl font-medium text-primary">
            Find Your Seat
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero