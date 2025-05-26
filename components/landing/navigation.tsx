import Link from "next/link"

export default function LandingNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-slate-800 hover:text-blue-600 transition-colors">
            UX Portfolio
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="#case-studies" className="text-slate-600 hover:text-blue-600 transition-colors">
              Case Studies
            </Link>
            <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
