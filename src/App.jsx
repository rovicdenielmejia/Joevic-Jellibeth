import { useState, useMemo, useEffect, useRef } from 'react'
import { Routes, Route, useSearchParams, useParams, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import GuestResult from './components/GuestResult'
import TableDetail from './components/TableDetail'
import Lightbox from './components/Lightbox'
import Footer from './components/Footer'
import PrintQR from './components/PrintQR'
import { searchGuests } from './data/guests'

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = useParams()
  const navigate = useNavigate()
  const inviteId = params['*'] || params.inviteId || ''
  const [lightboxOpen, setLightboxOpen] = useState(false)
  
  const initialQuery = searchParams.get('q') || ''
  
  const [searchQuery, setSearchQuery] = useState(initialQuery || inviteId)
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const dropdownRef = useRef(null)
  
  useEffect(() => {
    if (inviteId) {
      setSearchQuery(inviteId)
    }
  }, [inviteId])

  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ q: searchQuery })
      setShowDropdown(searchQuery.trim().length > 0)
    } else {
      setSearchParams({})
      setShowDropdown(false)
    }
  }, [searchQuery, setSearchParams])
  
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    return searchGuests(searchQuery)
  }, [searchQuery])

  const handleClearSearch = () => {
    setSearchQuery('')
    setShowDropdown(false)
    setSelectedIndex(-1)
  }

  const handleSelectGuest = (guest) => {
    setSearchQuery(guest.name)
    setShowDropdown(false)
    setSelectedIndex(-1)
    navigate(`/table/${encodeURIComponent(guest.table)}`)
  }

  const handleKeyDown = (e) => {
    if (!showDropdown || searchResults.length === 0) return
    
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => prev < searchResults.length - 1 ? prev + 1 : prev)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => prev > 0 ? prev - 1 : prev)
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault()
      handleSelectGuest(searchResults[selectedIndex])
    } else if (e.key === 'Escape') {
      setShowDropdown(false)
    }
  }

  return (
    <div className="min-h-screen bg-emerald-600 flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-md mx-auto w-full px-4 space-y-6 pb-8">
        <Hero />

        {/* Search Section */}
        <section className="space-y-4">
          <div className="relative">
            <SearchBar 
              value={searchQuery}
              onChange={(val) => {
                setSearchQuery(val)
                setSelectedIndex(-1)
              }}
              onClear={handleClearSearch}
              autoFocus={!!inviteId}
              onKeyDown={handleKeyDown}
            />
            
            {/* Dropdown Results */}
            {showDropdown && searchResults.length > 0 && (
              <div 
                ref={dropdownRef}
                className="absolute z-50 w-full mt-2 bg-emerald-800 border border-gold-500/30 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up"
              >
                <div className="max-h-72 overflow-y-auto">
                  {searchResults.map((guest, index) => (
                    <button
                      key={guest.id}
                      onClick={() => handleSelectGuest(guest)}
                      className={`w-full px-4 py-3 text-left hover:bg-emerald-700/50 transition-colors flex items-center justify-between gap-3 ${
                        index === selectedIndex ? 'bg-emerald-700/50' : ''
                      } ${index > 0 ? 'border-t border-gold-500/10' : ''}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-ivory-100 font-medium truncate">
                          {guest.name}
                        </p>
                        <p className="text-gold-500/70 text-xs truncate">
                          {guest.table}
                        </p>
                      </div>
                      <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
                <div className="px-4 py-2 bg-emerald-900/50 border-t border-gold-500/10">
                  <p className="text-gold-500/50 text-xs text-center">
                    {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Full Search Results */}
          {searchQuery.trim() && !showDropdown && (
            <section className="space-y-4 animate-fade-in-up">
              {searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map((guest) => (
                    <GuestResult key={guest.id} guest={guest} />
                  ))}
                </div>
              ) : (
                <div className="bg-emerald-800/50 rounded-2xl p-6 text-center border border-gold-500/20">
                  <p className="text-gold-400">
                    No guest found. Please check the spelling or ask the registration team.
                  </p>
                </div>
              )}
            </section>
          )}
        </section>

        {/* Table Arrangement Image */}
        {!searchQuery.trim() && (
          <>
            <div 
              className="bg-emerald-800/50 rounded-2xl p-3 border border-gold-500/20 cursor-zoom-in hover:border-gold-500/50 transition-all"
              onClick={() => setLightboxOpen(true)}
            >
              <img 
                src="/Table-Arrangement.png" 
                alt="Table Seating Arrangement" 
                className="w-full h-auto rounded-xl"
              />
              <p className="text-gold-500/50 text-xs text-center mt-2">Tap to zoom</p>
            </div>
            <p className="text-gold-400 text-center font-serif text-xl">
              "Thank you for sailing with us!"
            </p>
          </>
        )}

        {/* Lightbox */}
        <Lightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)}>
          <img 
            src="/Table-Arrangement.png" 
            alt="Table Seating Arrangement" 
            className="w-full h-auto rounded-xl"
          />
        </Lightbox>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/seat-finder" element={<HomePage />} />
      <Route path="/seat-finder/*" element={<HomePage />} />
      <Route path="/table/:tableName" element={<TableDetail />} />
      <Route path="/print-qr" element={<PrintQR />} />
    </Routes>
  )
}

export default App