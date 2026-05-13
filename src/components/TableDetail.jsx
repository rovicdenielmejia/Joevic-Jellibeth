import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { guests } from '../data/guests'
import { tableArrangementImage } from '../constants/assets'
import Lightbox from './Lightbox'

const TableDetail = () => {
  const { tableName } = useParams()
  const navigate = useNavigate()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  
  const decodedTableName = decodeURIComponent(tableName || '')
  const tableGuests = guests.filter(g => g.table === decodedTableName)

  if (tableGuests.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50/95 flex flex-col">
        <div className="max-w-md mx-auto w-full px-4 py-8">
          <button 
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Seat Finder
          </button>
          <div className="bg-cream-100 rounded-2xl p-6 border border-border text-center shadow-soft">
            <p className="text-secondary">Table not found</p>
          </div>
        </div>
      </div>
    )
  }

  const getSimpleTableName = () => {
    if (decodedTableName.startsWith('Table ')) {
      return decodedTableName.replace('Table ', '')
    }
    return decodedTableName
  }

  return (
    <div className="min-h-screen bg-cream-50/95 flex flex-col">
      <div className="max-w-md mx-auto w-full px-4 py-6 space-y-6 pb-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Seat Finder
        </button>

        {/* Table Arrangement Image */}
        <div 
          className="bg-cream-50 rounded-2xl p-3 border border-border cursor-zoom-in hover:shadow-soft-lg transition-all"
          onClick={() => setLightboxOpen(true)}
        >
          <img 
            src={tableArrangementImage}
            alt="Table Seating Arrangement" 
            className="w-full h-auto rounded-lg"
          />
          <p className="text-secondary text-xs text-center mt-2">Tap to zoom</p>
        </div>

        {/* Table Header - Invitation Style */}
        <div className="bg-cream-50 rounded-2xl p-6 border border-border shadow-soft text-center">
          <p className="text-secondary text-xs uppercase tracking-[0.18em] mb-2">Table</p>
          <h2 className="font-serif text-6xl md:text-7xl font-medium text-primary">
            {getSimpleTableName()}
          </h2>
          <p className="text-secondary text-sm mt-2">
            {tableGuests.length} {tableGuests.length === 1 ? 'guest' : 'guests'} seated at this table
          </p>
        </div>

        {/* Lightbox */}
        <Lightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)}>
          <img 
            src={tableArrangementImage}
            alt="Table Seating Arrangement" 
            className="w-full h-auto rounded-lg"
          />
        </Lightbox>

        {/* Guest List at Table */}
        <div className="bg-cream-50 rounded-2xl overflow-hidden border border-border shadow-soft">
          <div className="px-5 py-4 bg-cream-100 border-b border-border">
            <h3 className="font-serif text-lg font-medium text-primary">
              Guests
            </h3>
          </div>
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {tableGuests.map((guest, index) => (
              <div 
                key={guest.id} 
                className="flex items-center gap-3 py-2 border-b border-border last:border-0"
              >
                <span className="w-6 h-6 bg-cream-100 border border-border rounded-full flex items-center justify-center text-xs text-secondary">
                  {index + 1}
                </span>
                <p className="text-sm font-medium text-primary">
                  {guest.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableDetail