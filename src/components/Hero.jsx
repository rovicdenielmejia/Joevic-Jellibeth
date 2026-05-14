const Hero = () => {
  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="space-y-6 text-center">
        <p className="text-secondary text-[11px] uppercase tracking-[0.26em] font-sans">
          Wedding Reception
        </p>

        <div className="space-y-2">
          <h1 className="font-serif text-[52px] md:text-7xl font-medium text-primary tracking-[0.08em] leading-[0.9]">
            JOEVIC
          </h1>
          <p className="font-script text-secondary text-5xl leading-none">
            and
          </p>
          <h1 className="font-serif text-[52px] md:text-7xl font-medium text-primary tracking-[0.08em] leading-[0.9]">
            JELLIBETH
          </h1>
          <p className="font-serif text-secondary italic text-lg pt-1">
            "Celebrate love with us"
          </p>
        </div>

        <div className="flex items-center gap-4 py-1">
          <div className="h-px flex-1 bg-border"></div>
          <span className="font-serif text-secondary text-sm tracking-[0.18em] uppercase">May 16, 2026</span>
          <div className="h-px flex-1 bg-border"></div>
        </div>

        <div className="bg-cream-50 rounded-2xl p-6 border border-border/90 space-y-5 shadow-soft text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1 bg-mint-100/55 rounded-xl p-3 border border-border/60">
              <p className="text-secondary text-[10px] uppercase tracking-[0.18em]">Date and Time</p>
              <p className="text-primary font-medium">Saturday, May 16, 2026</p>
              <p className="text-secondary">at 12:30 PM</p>
            </div>
            <div className="space-y-1 bg-rose-50/70 rounded-xl p-3 border border-border/60">
              <p className="text-secondary text-[10px] uppercase tracking-[0.18em]">Ceremony</p>
              <p className="text-primary font-medium">Our Lady of the Pillar Parish Church</p>
              <p className="text-secondary">Cauayan City, Isabela</p>
            </div>
          </div>

          <div className="h-px bg-border"></div>

          <div className="space-y-1 bg-mint-100/40 rounded-xl p-3 border border-border/60">
            <p className="text-secondary text-[10px] uppercase tracking-[0.18em]">Reception</p>
            <p className="text-primary font-medium">Sally&apos;s Integrated Farm</p>
            <p className="text-secondary">Brgy. Turod, Reina Mercedes, Isabela</p>
          </div>
        </div>

        <div className="pt-1 space-y-1">
          <h2 className="font-serif text-2xl font-medium text-primary tracking-wide">
            "Find your seat instantly"
          </h2>
          <p className="text-secondary text-sm">Search your name below to view your table assignment.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero