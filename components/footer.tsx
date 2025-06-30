import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.jpeg" 
                alt="Men's Walk n Talk Logo" 
                className="h-16 w-16 mr-3"
              />
              <h3 className="text-2xl font-bold text-white">Men's Walk n Talk CIC</h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              CIC: 14514390
            </p>
            <p className="text-sm text-gray-400 mb-2">
              International House, 3Space<br />
              6 Canterbury Cres<br />
              London SW9 7QD
            </p>
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
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 mb-4 sm:mb-0">
              © {new Date().getFullYear()} Men's Walk n Talk. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs">
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}