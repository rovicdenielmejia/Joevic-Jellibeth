const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-emerald-700/95 backdrop-blur-md border-b border-gold-500/30">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <img 
            src="/Logo.png" 
            alt="Venuelle Logo" 
            className="h-8 w-auto"
          />
          <span className="font-serif text-lg font-semibold text-gold-400 tracking-wide">
            Venuelle
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header