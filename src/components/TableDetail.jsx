import { useParams, useNavigate } from 'react-router-dom'
import { useReducer, useState } from 'react'
import { guests } from '../data/guests'

const TableDetail = () => {
  const { tableName } = useParams()
  const navigate = useNavigate()
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  
  const decodedTableName = decodeURIComponent(tableName || '')
  const tableGuests = guests.filter(g => g.table === decodedTableName)

  if (tableGuests.length === 0) {
    return (
      <div className="min-h-screen bg-emerald-600 flex flex-col">
        <div className="max-w-md mx-auto w-full px-4 py-8">
          <button 
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Search
          </button>
          <div className="bg-emerald-800/50 rounded-2xl p-6 border border-gold-500/20 text-center">
            <p className="text-gold-400">Table not found</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-emerald-600 flex flex-col">
      <div className="max-w-md mx-auto w-full px-4 py-6 space-y-6 pb-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Search
        </button>

        {/* Table Header */}
        <div className="bg-emerald-800/70 rounded-2xl p-5 border border-gold-500/20">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl font-semibold text-gold-400">
              {decodedTableName}
            </h2>
            <p className="text-ivory-100 text-sm">
              {tableGuests.length} {tableGuests.length === 1 ? 'guest' : 'guests'}
            </p>
          </div>
        </div>

        {/* Table Arrangement Image */}
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

        {/* Lightbox */}
        <div 
          className={`fixed inset-0 z-50 bg-black/90 flex items-center justify-center ${lightboxOpen ? 'block' : 'hidden'}`}
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative w-full h-full overflow-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setLightboxOpen(false)}
              className="fixed top-4 right-4 z-50 w-10 h-10 bg-emerald-800/80 rounded-full flex items-center justify-center text-gold-400 hover:bg-emerald-700/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src="/Table-Arrangement.png" 
              alt="Table Seating Arrangement" 
              className="w-full h-auto min-w-full min-h-full"
              style={{ maxWidth: 'none' }}
            />
          </div>
        </div>

        {/* Guest List at Table */}
        <div className="bg-emerald-800/70 rounded-2xl overflow-hidden border border-gold-500/20">
          <div className="px-4 py-3 bg-emerald-900/50 border-b border-gold-500/20">
            <h3 className="font-serif text-lg font-semibold text-gold-400">
              Guests at this Table
            </h3>
          </div>
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {tableGuests.map((guest) => (
              <div 
                key={guest.id} 
                className="flex items-center gap-3 py-2 border-b border-gold-500/10 last:border-0"
              >
                <p className="text-sm font-medium text-ivory-100">
                  {guest.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Note for VIP tables */}
        {(decodedTableName === "VIP Table 1" || decodedTableName === "VIP Table 2" || decodedTableName === "Parents' Table") && (
          <div className="bg-blue-500/10 rounded-2xl p-4 border border-blue-500/20">
            <p className="text-blue-300 text-sm text-center">
              {decodedTableName === "VIP Table 1" || decodedTableName === "VIP Table 2" 
                ? "Principal Sponsors are seated at the VIP Tables near the head table."
                : "The Parents are seated at the special Parents' Table near the head table."}
            </p>
          </div>
)}
      </div>
    </div>
  )
}

export default TableDetail