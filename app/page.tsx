import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Heart, MessageCircle, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal to-teal-dark py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/logo.jpeg" 
              alt="Men's Walk n Talk Logo" 
              className="h-32 w-32 mx-auto mb-6 rounded-full shadow-lg"
            />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Men's Walk N Talk CIC
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
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Who We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              MWnT is a welcoming and diverse group of straight and queer men—especially those from 
              Afro-Caribbean backgrounds—who come together through shared experiences, meaningful 
              discussions, and cultural exploration.
            </p>
            <div className="mt-8">
              <Button variant="default" asChild>
                <Link href="/about">Learn About Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}