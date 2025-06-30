import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "David M.",
    quote: "Men's Walk n Talk gave me a space to be myself without judgment. The walks helped me process difficult emotions and connect with men who understood my journey.",
    role: "Member since 2023",
  },
  {
    id: 2,
    name: "Marcus K.",
    quote: "I was isolated and struggling. These walks literally saved my life. I found brothers who showed me that vulnerability is strength, not weakness.",
    role: "Member since 2022",
  },
  {
    id: 3,
    name: "James T.",
    quote: "The cultural visits opened my eyes to new perspectives. It's more than just walking - it's about growing together as men and as a community.",
    role: "Member since 2023",
  },
  {
    id: 4,
    name: "Samuel A.",
    quote: "As a young Black man, finding a space where I could talk openly about mental health was life-changing. Men's Walk n Talk helped me heal relationships with my family.",
    role: "Member since 2022",
  },
  {
    id: 5,
    name: "Richard P.",
    quote: "The intergenerational conversations on our walks taught me so much. Hearing older men's stories helped me understand my own path better.",
    role: "Member since 2023",
  },
  {
    id: 6,
    name: "Anthony L.",
    quote: "I came for the exercise but stayed for the brotherhood. Men's Walk n Talk showed me that asking for help is courageous, not weak.",
    role: "Member since 2021",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Stories from Our Community
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Real experiences from men who have found connection, healing, and growth through Men's Walk n Talk.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-teal"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-gray-700 mb-4">
                {testimonial.quote}
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-teal rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Your experience could inspire another man to take the first step. 
            We'd love to hear how Men's Walk n Talk has impacted your life.
          </p>
          <Button variant="yellow" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}