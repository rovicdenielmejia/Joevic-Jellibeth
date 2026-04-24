const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-emerald-700/95 backdrop-blur-md border-b border-gold-500/30">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0-4.418 4.477-8 10-8s10 3.582 10 8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11M8 7l4-4 4 4M8 15l4 4 4-4" />
            <circle cx="12" cy="11" r="2" fill="currentColor" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9V5M9 7l-1-2M15 7l1-2" />
          </svg>
          <span className="font-serif text-lg font-semibold text-gold-400 tracking-wide">
            Venuelle
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header