import { useNavigate } from 'react-router-dom'

const getTableLocation = (tableName) => {
  if (tableName === "Parents' Table") {
    return "Front row center, near the head table"
  }
  if (tableName === "VIP Table 1" || tableName === "VIP Table 2") {
    return "Front row, near the head table"
  }
  if (tableName.startsWith("Table #")) {
    const num = parseInt(tableName.replace("Table #", ""))
    if (num >= 1 && num <= 6) {
      return "Front section, center area"
    }
    if (num >= 7 && num <= 14) {
      return "Middle section"
    }
    if (num >= 15 && num <= 22) {
      return "Back section"
    }
  }
  return ""
}

const GuestResult = ({ guest }) => {
  const navigate = useNavigate()
  const tableLocation = getTableLocation(guest.table)

  const handleViewTable = () => {
    navigate(`/table/${encodeURIComponent(guest.table)}`)
  }

  return (
    <div className="bg-emerald-800/50 rounded-2xl p-5 border border-gold-500/20 shadow-soft card-hover animate-fade-in-up">
      <div className="flex items-center justify-between gap-4">
        <div className="text-center min-w-[80px]">
          <p className="text-gold-400/70 text-xs mb-1">Table</p>
          <h3 className="font-serif text-7xl font-bold text-gold-400 leading-none">
            {guest.table.replace('Table #', '#')}
          </h3>
        </div>

        <div className="w-px h-12 bg-gold-500/30"></div>

        <div className="flex-1 text-center">
          <p className="text-gold-400/70 text-xs mb-1">Name</p>
          <h4 className="font-serif text-xl font-semibold text-ivory-50">
            {guest.name}
          </h4>
        </div>
      </div>

      {tableLocation && (
        <div className="mt-4 py-3 px-4 bg-emerald-900/50 rounded-xl border border-gold-500/20">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gold-400 text-sm font-medium">
              {tableLocation}
            </p>
          </div>
        </div>
      )}

      <button
        onClick={handleViewTable}
        className="w-full mt-4 py-3 px-4 bg-gold-500 hover:bg-gold-400 rounded-xl text-emerald-900 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        View Table Location
      </button>
    </div>
  )
}

export default GuestResult