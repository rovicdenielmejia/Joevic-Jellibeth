import { QRCodeSVG } from 'qrcode.react'

const PrintQR = () => {
  const baseUrl = 'https://j-and-a-wedding.vercel.app'

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-md">
        {/* Title */}
        <h1 className="font-serif text-4xl font-semibold text-emerald-700">
          J&A Wedding
        </h1>
        <p className="text-xl text-emerald-600">
          Seat Finder
        </p>
        
        <p className="text-lg text-gray-600">
          Scan to find your table
        </p>

        {/* QR Code */}
        <div className="bg-white p-4 rounded-2xl border-2 border-emerald-700 inline-block">
          <QRCodeSVG
            value={baseUrl}
            size={350}
            level="H"
            includeMargin={true}
            fgColor="#0B3D2E"
          />
        </div>

        <p className="text-sm text-gray-500 break-all">
          {baseUrl}
        </p>
      </div>
    </div>
  )
}

export default PrintQR