import { Button } from "@/components/ui/button"
import { Heart, Users, Calendar, MapPin } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Support Our Mission
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Your donation helps us continue providing free walks and support for men across London.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          {/* Impact Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Your Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-teal mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Community Support</h3>
                  <p className="text-gray-600 text-sm">
                    Help us reach more men who need connection and support
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Regular Walks</h3>
                  <p className="text-gray-600 text-sm">
                    Ensure we can continue our weekly walks across London
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-yellow-dark mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Cultural Visits</h3>
                  <p className="text-gray-600 text-sm">
                    Fund museum and gallery visits for our community
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="h-6 w-6 text-teal mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Mental Health</h3>
                  <p className="text-gray-600 text-sm">
                    Support wellbeing initiatives and resources
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Options */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Make a Donation
            </h2>
            
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-4">
                Every contribution, no matter the size, makes a difference in our community.
              </p>
              <p className="text-sm text-gray-500">
                Men's Walk n Talk is a grassroots initiative. Your donations go directly to supporting our walks and programs.
              </p>
            </div>

            <div className="grid gap-4 mb-8">
              <Button size="lg" className="w-full" variant="default">
                Donate £10
              </Button>
              <Button size="lg" className="w-full" variant="default">
                Donate £25
              </Button>
              <Button size="lg" className="w-full" variant="default">
                Donate £50
              </Button>
              <Button size="lg" className="w-full" variant="orange">
                Custom Amount
              </Button>
            </div>

            <div className="border-t pt-6">
              <p className="text-center text-sm text-gray-600">
                For bank transfers or other donation methods, please{" "}
                <a href="/contact" className="text-teal hover:underline">
                  contact us
                </a>
                .
              </p>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Thank You for Your Support
            </h3>
            <p className="text-gray-600">
              Your generosity helps us continue building a community where men can walk, 
              talk, and grow together. Together, we're making vulnerability our strength.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}