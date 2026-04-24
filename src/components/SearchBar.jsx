const SearchBar = ({ value, onChange, onClear, autoFocus, onKeyDown }) => {
  return (
    <div className="relative">
      <div className="relative">
        <svg 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-taupe-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
        <input
          type="text"
          placeholder="Search your name..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-12 py-4 bg-cream-50 border border-border rounded-2xl text-primary placeholder-taupe-400 text-base shadow-soft focus:border-lilac-300 focus:ring-2 focus:ring-lilac-100 transition-all"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-lilac-100/70 hover:bg-lilac-200/80 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar