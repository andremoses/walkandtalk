import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function CollaborationsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Collaborations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Working together with organizations that share our vision for community wellbeing.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Partner Organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative h-32 bg-white rounded-lg shadow-sm p-6">
              <Image
                src="/colabs/ENO_Logo.avif"
                alt="ENO Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-32 bg-white rounded-lg shadow-sm p-6">
              <Image
                src="/colabs/North_Tate_001_Logo.avif"
                alt="Tate Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-32 bg-white rounded-lg shadow-sm p-6">
              <Image
                src="/colabs/Victoria_and_Albert_Museum_Logo.svg.png"
                alt="Victoria and Albert Museum Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cultural Partners</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-2">Museums & Galleries</h3>
                <p className="text-gray-600">
                  We partner with London's cultural institutions to provide enriching experiences 
                  that spark meaningful conversations and personal growth.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-2">Community Spaces</h3>
                <p className="text-gray-600">
                  Local community centers and libraries provide spaces for our indoor gatherings 
                  and workshops when weather doesn't permit walks.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Health & Wellbeing Partners</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-600 mb-6">
                We collaborate with mental health organizations and wellbeing services to ensure 
                our members have access to professional support when needed. Our approach combines 
                peer support with professional resources.
              </p>
            </div>
          </section>

          <section className="bg-teal rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="mb-6">
              Are you an organization that shares our commitment to men's wellbeing? 
              We're always looking for partners who can help us expand our impact and 
              reach more men who need support.
            </p>
            <Button variant="yellow" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}