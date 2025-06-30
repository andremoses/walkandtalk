import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function SponsorsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Funders
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Thank you to the organizations and individuals whose funding makes our work possible.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Current Funders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {[
              { src: "/funders/0261A33D-2482-4340-AE85-AD89FD3B3F93.jpeg", alt: "Funder 1" },
              { src: "/funders/1B342870-0877-4EBD-8471-89D63BC3C46E.jpeg", alt: "Funder 2" },
              { src: "/funders/1B75218A-36BB-4E90-BB1A-EC4BA251A8DC_1_201_a.jpeg", alt: "Funder 3" },
              { src: "/funders/36656990-459C-4E2A-9A50-809AC3067B57_4_5005_c.jpeg", alt: "Funder 4" },
              { src: "/funders/40B4AB13-AD03-4999-A85F-567D59D7BC0E_1_102_o.jpeg", alt: "Funder 5" },
              { src: "/funders/4B9385BC-F9B2-4436-924F-C79E72B720BD_1_102_o.jpeg", alt: "Funder 6" },
              { src: "/funders/DECF0FA9-D14C-45BB-8A0C-E257CC259D8F.jpeg", alt: "Funder 7" },
              { src: "/funders/FB6324E1-6E00-4122-9F4D-627D23FF9980.png", alt: "Funder 8" }
            ].map((funder, index) => (
              <div key={index} className="relative h-24 bg-white rounded-lg shadow-sm p-4">
                <Image
                  src={funder.src}
                  alt={funder.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <p className="text-lg text-gray-600 mb-8">
              MWnT is grateful for the support of our funders who make it possible for us to provide free walks 
              and programs for men across London. Their funding directly enables us to create safe spaces 
              for men to connect, share, and support each other through life's challenges.
            </p>
            
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                How Funders Help Us
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Your funding transforms lives by enabling us to offer free mental health support through walking groups, 
                cultural activities, and community building. Every contribution helps us reach more men who need connection and support.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Walk Funder</h3>
              <p className="text-gray-600 text-sm mb-4">
                Support our regular community walks
              </p>
              <p className="text-2xl font-bold text-teal">From £500</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Cultural Visit Funder</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fund museum and gallery experiences
              </p>
              <p className="text-2xl font-bold text-orange">From £1,000</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Annual Funding Partner</h3>
              <p className="text-gray-600 text-sm mb-4">
                Year-round support for all programs
              </p>
              <p className="text-2xl font-bold text-yellow-dark">From £5,000</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Become a Funder
            </h2>
            <p className="text-gray-600 mb-6">
              Help us create lasting change in men's mental health across London. Your funding directly 
              supports our walks, cultural visits, and community programs that provide vital connection and support.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">Contact Us About Funding Opportunities</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}