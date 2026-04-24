const TableCard = ({ table }) => {
  return (
    <div className="bg-emerald-800/30 rounded-2xl overflow-hidden border border-gold-500/10 shadow-soft">
      <div className="px-4 py-3 bg-gradient-to-r from-emerald-700 to-emerald-800/50 border-b border-gold-500/10">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-serif text-lg font-semibold text-gold-400">
            {table.name}
          </h4>
          <span className="text-xs font-medium text-gold-500 bg-emerald-900/50 px-2 py-1 rounded-full">
            {table.guests.length} {table.guests.length === 1 ? 'guest' : 'guests'}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
        {table.guests.map((guest) => (
          <div key={guest.id} className="py-2 border-b border-gold-500/10 last:border-0">
            <p className="text-sm font-medium text-ivory-100">
              {guest.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableCard