const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream-50/85 backdrop-blur-sm border-b border-border">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-center">
        <div className="w-full flex items-center justify-center gap-2">
          <img
            src="/Logo.png"
            alt="Venuelle logo"
            className="w-7 h-7 rounded-md object-cover shadow-sm shrink-0"
          />
          <span className="block font-serif text-[10px] text-secondary text-center tracking-[0.06em] leading-tight whitespace-normal">
            Seat Finder | Powered by Venuelle
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header