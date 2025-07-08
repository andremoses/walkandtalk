import Image from "next/image"

export default function WalksPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Join Our Walks
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Connect with our community through regular walks across London. 
            All walks are free and open to all men who want to join us.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-12">
            <Image
              src="/pics/WhatsApp Image 2025-06-27 at 20.46.26 (1).jpeg"
              alt="Previous walk in London"
              fill
              className="object-cover object-[center_40%]"
            />
          </div>

          {/* Calendar Embed Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Walk Schedule</h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=d345a6b22dfe9b70ebfdc49056ed0be3c2d1de64d77fec9ae75996c5705edb12%40group.calendar.google.com&ctz=Europe%2FLondon"
                style={{ border: 0 }}
                width="100%"
                height="600"
                title="Men's Walk n Talk Calendar"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Walk Guidelines */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">Before the Walk</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>Register through our calendar or contact us</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>Wear comfortable walking shoes and weather-appropriate clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>Bring water and any personal items you need</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">During the Walk</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange mr-2">•</span>
                    <span>We walk at a comfortable pace for all fitness levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">•</span>
                    <span>Conversations flow naturally - no pressure to share</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">•</span>
                    <span>What's shared on the walk stays on the walk</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cultural Visits */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cultural Visits</h2>
            <p className="text-lg text-gray-600 mb-6">
              Beyond our regular walks, we organize visits to museums, galleries, and theatres. 
              These cultural experiences spark meaningful conversations and help us explore new perspectives together.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold mb-2">Museums</h3>
                <p className="text-gray-600 text-sm">
                  Exploring history and culture to understand our present
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold mb-2">Galleries</h3>
                <p className="text-gray-600 text-sm">
                  Engaging with art to express what words cannot
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold mb-2">Theatres</h3>
                <p className="text-gray-600 text-sm">
                  Experiencing stories that reflect our journeys
                </p>
              </div>
            </div>
          </div>

          {/* Previous Walks */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Previous Walks 2025</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border-l-4 border-teal pl-4">
                  <h3 className="font-semibold text-lg text-teal mb-2">February</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><span className="font-medium">9th:</span> Tate Britain</li>
                    <li><span className="font-medium">23rd:</span> Tate Modern</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange pl-4">
                  <h3 className="font-semibold text-lg text-orange mb-2">March</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><span className="font-medium">9th:</span> Hyde Park</li>
                    <li><span className="font-medium">10th:</span> Evening Walk to Tate</li>
                    <li><span className="font-medium">14th:</span> Evening Walk to Theatre - Retrograde</li>
                    <li><span className="font-medium">18th:</span> Evening Walk to Theatre - Punch</li>
                    <li><span className="font-medium">23rd:</span> Green Park</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-dark pl-4">
                  <h3 className="font-semibold text-lg text-yellow-dark mb-2">April</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><span className="font-medium">6th:</span> Epping Forest with tour guide</li>
                    <li><span className="font-medium">20th:</span> Regent's Park</li>
                    <li><span className="font-medium">23rd:</span> Nuffield Swimming Lessons</li>
                    <li><span className="font-medium">25th:</span> BBC Sounds Interview with Edward Adoo</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal pl-4">
                  <h3 className="font-semibold text-lg text-teal mb-2">May</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><span className="font-medium">3rd-4th:</span> Mental Health First Aid Training</li>
                    <li><span className="font-medium">6th:</span> The Secret Lives of Baba Segi's Wives</li>
                    <li><span className="font-medium">11th:</span> Walk to Cinema - Sinners West Norwood</li>
                    <li><span className="font-medium">19th:</span> Walk Ubele</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange pl-4">
                  <h3 className="font-semibold text-lg text-orange mb-2">June</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><span className="font-medium">1st:</span> Greenwich PT 1 - Painted Hall</li>
                    <li><span className="font-medium">11th:</span> Lyric Theatre - Hadestown</li>
                    <li><span className="font-medium">15th:</span> Royal Botanic Gardens</li>
                    <li><span className="font-medium">17th:</span> Arcola Theatre/ 54-60 Africa</li>
                    <li><span className="font-medium">29th:</span> Darwin Walk</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Join us for our upcoming walks and activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}