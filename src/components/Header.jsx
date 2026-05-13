const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream-50/92 backdrop-blur-sm border-b border-border/80">
      <div className="max-w-md mx-auto px-4 py-4 text-center">
        <div className="flex items-center justify-center gap-3 text-sm md:text-base text-primary tracking-[0.08em] uppercase font-medium">
          <img
            src="/Logo.png"
            alt="Venuelle logo"
            className="w-10 h-10 rounded-md object-cover"
          />
          <span>Seat Finder</span>
          <span>|</span>
          <a
            href="https://venuelle.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Powered by Venuelle
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header