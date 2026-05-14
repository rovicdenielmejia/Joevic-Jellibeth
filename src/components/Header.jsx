const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-mint-100/90 backdrop-blur-sm border-b border-border/90 shadow-soft">
      <div className="max-w-md mx-auto px-4 py-4 text-center">
        <div className="flex items-center justify-center gap-3 text-sm md:text-base text-primary tracking-[0.08em] uppercase font-medium">
          <img
            src="/Logo.png"
            alt="Venuelle logo"
            className="w-10 h-10 rounded-full object-cover border border-border"
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