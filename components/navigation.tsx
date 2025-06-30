"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    subItems: [
      { name: "Our Team", href: "/about/team" },
      { name: "Collaborations", href: "/about/collaborations" },
      { name: "Our Funders", href: "/about/sponsors" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Walks", href: "/walks" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.jpeg" 
                alt="Men's Walk n Talk Logo" 
                className="h-12 w-12 mr-3"
              />
              <span className="text-2xl font-bold text-teal">Men's Walk N Talk</span>
            </Link>
          </div>
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((item) => (
              <div key={item.name} className="relative inline-block">
                {item.subItems ? (
                  <div className="relative">
                    <button
                      className={cn(
                        "text-base font-medium hover:text-teal",
                        pathname.startsWith(item.href)
                          ? "text-teal"
                          : "text-gray-700"
                      )}
                      onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                    >
                      {item.name}
                    </button>
                    {aboutDropdownOpen && (
                      <div className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setAboutDropdownOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base font-medium hover:text-teal",
                      pathname === item.href ? "text-teal" : "text-gray-700"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="ml-10 space-x-4">
            <Button variant="default" asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBVOE8CsEffuqi9UPKdqEHQ7mj96FYMzC0X8d7n3cjyRwy7Q/viewform" target="_blank" rel="noopener noreferrer">
                Register
              </a>
            </Button>
            <Button variant="orange" asChild>
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <>
                    <div className="block rounded-md px-3 py-2 text-base font-medium text-gray-700">
                      {item.name}
                    </div>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block rounded-md pl-6 pr-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-teal"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-3 space-y-2">
              <Button variant="default" className="w-full" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBVOE8CsEffuqi9UPKdqEHQ7mj96FYMzC0X8d7n3cjyRwy7Q/viewform" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </Button>
              <Button variant="orange" className="w-full" asChild>
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}