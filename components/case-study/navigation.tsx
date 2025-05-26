export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-slate-800">UX Case Study</div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#overview" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Overview
            </a>
            <a href="#process" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Process
            </a>
            <a href="#results" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Results
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
