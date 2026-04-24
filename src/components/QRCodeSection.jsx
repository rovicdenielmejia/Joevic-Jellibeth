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
      ctx.fillStyle = '#FFFDF8'
      ctx.fillRect(0, 0, 400, 400)
      ctx.drawImage(img, 25, 25, 350, 350)
      
      const link = document.createElement('a')
      link.download = 'sef-nelle-wedding-qr.png'
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
        <h2 className="font-serif text-2xl font-medium text-primary">
          Scan to Find Your Seat
        </h2>
        <p className="text-secondary text-sm">
          Open the seat finder on your phone
        </p>

        <div className="bg-cream-50 rounded-2xl p-5 border border-border inline-block shadow-soft">
          <div className="bg-white p-3 rounded-xl">
            <QRCodeSVG
              id="qr-code-svg"
              value={baseUrl}
              size={180}
              level="H"
              includeMargin={false}
              fgColor="#4B3A35"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 max-w-xs mx-auto">
          <button
            onClick={handleOpenLink}
            className="px-6 py-3 bg-lilac-100/60 border border-lilac-200 hover:bg-lilac-200/70 text-primary font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open Seat Finder
          </button>
        </div>

        <p className="text-xs text-secondary break-all">
          {baseUrl}
        </p>
      </div>
    </section>
  )
}

export default QRCodeSection