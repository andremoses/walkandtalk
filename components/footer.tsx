import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">MWnT</h3>
            <p className="text-sm text-gray-400">
              Building Connection, Conversation, and Community Through Movement
            </p>
            <p className="mt-4 text-xs text-orange font-semibold">
              VULNERABILITY IS OUR STRENGTH
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/walks" className="text-sm text-gray-400 hover:text-white">
                  Join a Walk
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/donate" className="text-sm text-gray-400 hover:text-white">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link href="/about/collaborations" className="text-sm text-gray-400 hover:text-white">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-gray-400 hover:text-white">
                  Share Your Story
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Men's Walk n Talk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}