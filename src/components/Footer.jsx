const Footer = () => {
  return (
    <footer className="border-t border-border/80 mt-8">
      {/* Floral bottom strip */}
      <div className="h-2 floral-strip"></div>
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-secondary text-xs tracking-wide">
            Powered by <span className="text-rose-400 font-serif">Venuelle</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer