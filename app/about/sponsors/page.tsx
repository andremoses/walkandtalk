import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SponsorsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Sponsors
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Thank you to the organizations and individuals who support our mission.
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <p className="text-lg text-gray-600 mb-8">
              MWnT is grateful for the support of our sponsors who help us provide free walks 
              and programs for men across London. Their generosity enables us to reach more 
              men who need connection and support.
            </p>
            
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Sponsorship Opportunities
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                By sponsoring MWnT, you're investing in men's mental health and community wellbeing. 
                Your support helps us maintain our free programs and expand our reach.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Walk Sponsor</h3>
              <p className="text-gray-600 text-sm mb-4">
                Support our regular community walks
              </p>
              <p className="text-2xl font-bold text-teal">From £500</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Cultural Visit Sponsor</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fund museum and gallery experiences
              </p>
              <p className="text-2xl font-bold text-orange">From £1,000</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Annual Partner</h3>
              <p className="text-gray-600 text-sm mb-4">
                Year-round support for all programs
              </p>
              <p className="text-2xl font-bold text-yellow-dark">From £5,000</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Become a Sponsor
            </h2>
            <p className="text-gray-600 mb-6">
              Join us in making a difference in men's lives across London.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">Contact Us About Sponsorship</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}