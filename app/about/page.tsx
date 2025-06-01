import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Men's Walk n Talk
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            A grassroots community initiative created to support men by providing a safe, 
            inclusive space to connect, share, and grow.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
            <p className="mt-4 text-lg text-gray-600">
              Men's Walk n Talk (MWnT) is a grassroots community initiative created to support 
              men—especially those from Afro-Caribbean backgrounds—by providing a safe, inclusive 
              space to connect, share, and grow. We are a welcoming and diverse group of straight 
              and queer men who come together through shared experiences, meaningful discussions, 
              and cultural exploration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
            <p className="mt-4 text-lg text-gray-600">
              At MWnT, we use group walks across London as a tool to encourage conversation, 
              support mental and physical health, and reduce isolation. Our walks are more than 
              just exercise—they are opportunities to build friendships, share stories, and 
              reflect on personal and community experiences.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We also collaborate with museums, cinemas, and theatres to introduce our members 
              to spaces they may not normally access, encouraging curiosity, learning, and 
              critical thinking. These outings help spark deeper conversations about identity, 
              masculinity, health, and the challenges faced by men today.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <div className="mt-4 space-y-3">
              <ul className="list-disc pl-5 space-y-2 text-lg text-gray-600">
                <li>Create a space for vulnerability and honest conversation</li>
                <li>Break down taboos around men's health and masculinity</li>
                <li>Combat isolation by nurturing friendship and trust</li>
                <li>Encourage cultural engagement and self-reflection</li>
                <li>Promote wellbeing through movement and connection</li>
                <li>Address intergenerational and cultural trauma within communities</li>
              </ul>
            </div>
            <p className="mt-6 text-lg text-gray-600">
              Through shared walks and open dialogue, we aim to help men communicate better 
              with their families, understand their communities, and take steps toward healing 
              and growth.
            </p>
          </section>

          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Explore More</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Our Team</h3>
                <p className="text-gray-600 mb-4">Meet the people behind MWnT</p>
                <Button variant="outline" asChild>
                  <Link href="/about/team">View Team</Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Collaborations</h3>
                <p className="text-gray-600 mb-4">Learn about our partnerships</p>
                <Button variant="outline" asChild>
                  <Link href="/about/collaborations">View Partners</Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Our Sponsors</h3>
                <p className="text-gray-600 mb-4">See who supports our mission</p>
                <Button variant="outline" asChild>
                  <Link href="/about/sponsors">View Sponsors</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}