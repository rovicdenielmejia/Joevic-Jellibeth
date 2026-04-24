import { QRCodeSVG } from 'qrcode.react'

const PrintQR = () => {
  const baseUrl = 'https://sef-nelle-wedding.vercel.app'

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-5 max-w-sm">
        {/* Top small text */}
        <p className="text-secondary text-sm uppercase tracking-[0.15em] font-sans">
          Together with their families
        </p>

        {/* Main names */}
        <div className="space-y-1">
          <h1 className="font-serif text-5xl font-medium text-primary">
            Sef & Nelle
          </h1>
        </div>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="w-12 h-px bg-border"></div>
          <svg className="w-4 h-4 text-rose-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="w-12 h-px bg-border"></div>
        </div>

        {/* Title */}
        <h2 className="font-serif text-2xl font-medium text-primary">
          Scan to Find Your Seat
        </h2>
        
        <p className="text-secondary text-sm">
          Open the seat finder on your phone
        </p>

        {/* QR Code with border */}
        <div className="bg-cream-50 p-5 rounded-2xl border border-border inline-block shadow-soft">
          <QRCodeSVG
            value={baseUrl}
            size={280}
            level="H"
            includeMargin={true}
            fgColor="#4B3A35"
          />
        </div>

        {/* Instructions */}
        <div className="space-y-2 text-sm text-secondary pt-2">
          <p className="font-medium text-primary">How to use:</p>
          <ol className="text-left space-y-1 list-decimal list-inside">
            <li>Scan the QR Code with your phone camera</li>
            <li>Enter your name in the search box</li>
            <li>View your table number</li>
          </ol>
        </div>

        {/* Floral bottom strip */}
        <div className="h-2 w-full mt-4" style={{
          background: 'linear-gradient(180deg, rgba(232, 183, 168, 0.3) 0%, rgba(232, 183, 168, 0.15) 40%, transparent 100%)'
        }}></div>

        {/* Footer */}
        <p className="text-xs text-secondary pt-4">
          Powered by <span className="text-rose-400 font-serif">Venuelle</span>
        </p>
      </div>
    </div>
  )
}

export default PrintQR