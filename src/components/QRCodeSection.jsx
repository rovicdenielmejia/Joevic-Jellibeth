import { QRCodeSVG } from 'qrcode.react'

const QRCodeSection = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://example.com'

  const handleDownload = () => {
    const svg = document.getElementById('qr-code-svg')
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      canvas.width = 400
      canvas.height = 400
      ctx.fillStyle = '#0B3D2E'
      ctx.fillRect(0, 0, 400, 400)
      ctx.drawImage(img, 25, 25, 350, 350)
      
      const link = document.createElement('a')
      link.download = 'ja-wedding-qr.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  }

  const handleOpenLink = () => {
    window.open(baseUrl, '_blank')
  }

  return (
    <section className="py-6 animate-fade-in-up">
      <div className="text-center space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold-400">
          Scan to Find Your Seat
        </h2>
        <p className="text-gold-500/70 text-sm">
          Use your phone camera to open the seat finder
        </p>

        <div className="bg-emerald-800/50 rounded-3xl p-6 border-2 border-gold-500/30 inline-block">
          <div className="bg-white p-3 rounded-2xl">
            <QRCodeSVG
              id="qr-code-svg"
              value={baseUrl}
              size={200}
              level="H"
              includeMargin={false}
              fgColor="#0B3D2E"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-emerald-900 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download QR
          </button>
          <button
            onClick={handleOpenLink}
            className="px-6 py-3 bg-transparent border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open Link
          </button>
        </div>

        <p className="text-xs text-gold-500/50 break-all">
          {baseUrl}
        </p>
      </div>
    </section>
  )
}

export default QRCodeSection