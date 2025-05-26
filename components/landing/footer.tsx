import Link from "next/link"

export default function LandingFooter() {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">UX Portfolio</h3>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Creating exceptional user experiences through data-driven design and strategic thinking.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Case Studies</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/case-studies/coworking-mobile-redesign" className="hover:text-white transition-colors">
                    Mobile App Redesign
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/ecommerce-checkout" className="hover:text-white transition-colors">
                    E-commerce Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/saas-onboarding" className="hover:text-white transition-colors">
                    SaaS Onboarding
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            © 2024 UX Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
