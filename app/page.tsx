import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Heart, MessageCircle, MapPin } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/pics/WhatsApp Image 2025-06-27 at 20.46.26.jpeg"
            alt="Men walking together"
            fill
            className="object-cover object-[center_40%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal/80 to-teal-dark/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/logo.jpeg" 
              alt="Men's Walk n Talk Logo" 
              className="h-32 w-32 mx-auto mb-6 rounded-full shadow-lg"
            />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Men's Walk n Talk
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Building Connection, Conversation, and Community Through Movement
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="yellow" asChild>
                <Link href="/walks">Join a Walk</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <p className="mt-8 text-xl font-semibold text-orange">
              VULNERABILITY IS OUR STRENGTH
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Creating safe spaces for men to connect, share, and grow through
              meaningful conversations and shared experiences.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                <Users className="h-8 w-8 text-teal" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Community</h3>
              <p className="mt-2 text-sm text-gray-600">
                Building friendships and trust through shared walks across London
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange/10">
                <MessageCircle className="h-8 w-8 text-orange" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Conversation</h3>
              <p className="mt-2 text-sm text-gray-600">
                Open dialogue about identity, masculinity, and personal growth
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow/10">
                <Heart className="h-8 w-8 text-yellow-dark" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Wellbeing</h3>
              <p className="mt-2 text-sm text-gray-600">
                Supporting mental and physical health through movement
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                <MapPin className="h-8 w-8 text-teal" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Exploration</h3>
              <p className="mt-2 text-sm text-gray-600">
                Discovering London's cultural spaces and hidden gems together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Walk With Us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Join our community of men supporting each other through movement and conversation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="yellow" asChild>
                <Link href="/walks">View Upcoming Walks</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Who We Serve
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Men's Walk n Talk is a welcoming and diverse group of straight and queer men—especially those from 
                Afro-Caribbean backgrounds—who come together through shared experiences, meaningful 
                discussions, and cultural exploration.
              </p>
              <div className="mt-8">
                <Button variant="default" asChild>
                  <Link href="/about">Learn About Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/pics/WhatsApp Image 2025-06-27 at 20.46.25 (1).jpeg"
                alt="Men's Walk n Talk community members"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}