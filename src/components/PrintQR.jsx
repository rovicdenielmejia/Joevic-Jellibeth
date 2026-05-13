import { QRCodeSVG } from 'qrcode.react'

const PrintQR = () => {
  const baseUrl = window.location.origin

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-md border border-border rounded-3xl p-10 bg-cream-50 shadow-soft">
        <p className="text-secondary text-[11px] uppercase tracking-[0.2em] font-sans">
          Wedding Reception
        </p>

        <div className="space-y-1">
          <h1 className="font-serif text-5xl font-medium text-primary tracking-[0.08em]">
            JOEVIC
          </h1>
          <p className="font-script text-4xl text-secondary leading-none">and</p>
          <h1 className="font-serif text-5xl font-medium text-primary tracking-[0.08em]">
            JELLIBETH
          </h1>
        </div>

        <div className="h-px bg-border"></div>

        <p className="font-serif text-3xl text-primary tracking-[0.12em]">
          SCAN ME
        </p>
        <p className="text-secondary text-sm">
          Find your assigned table instantly
        </p>

        <div className="bg-cream-50 p-6 rounded-2xl border border-border inline-block shadow-soft">
          <QRCodeSVG
            value={baseUrl}
            size={280}
            level="H"
            includeMargin={true}
            fgColor="#5E5A57"
          />
        </div>

        <div className="space-y-1 text-sm text-secondary pt-1">
          <p>1. Open camera and scan</p>
          <p>2. Search your full name</p>
          <p>3. View your table assignment</p>
        </div>

        <p className="text-xs text-secondary uppercase tracking-[0.14em] pt-3">
          Powered by <span className="text-primary font-serif">Venuelle</span>
        </p>
      </div>
    </div>
  )
}

export default PrintQR