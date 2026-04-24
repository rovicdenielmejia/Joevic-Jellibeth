const TableCard = ({ table }) => {
  return (
    <div className="bg-cream-50 rounded-2xl overflow-hidden border border-border shadow-soft">
      <div className="px-4 py-3 bg-lilac-100/60 border-b border-border">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-serif text-base font-medium text-primary">
            {table.name}
          </h4>
          <span className="text-xs font-medium text-secondary bg-rose-100 px-2 py-1 rounded-full">
            {table.guests.length}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
        {table.guests.map((guest) => (
          <div key={guest.id} className="py-2 border-b border-border last:border-0">
            <p className="text-sm text-primary">
              {guest.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableCard