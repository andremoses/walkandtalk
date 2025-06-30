"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send the form data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Have questions about our walks? Want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-teal mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">Menswalkntalkoutreach@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-teal mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-teal mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Walks Location</h3>
                  <p className="text-gray-600">Various locations across London</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Meeting points shared upon registration
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-teal/10 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Join Our Next Walk</h3>
              <p className="text-gray-600 mb-4">
                The best way to learn about Men's Walk n Talk is to join us for a walk. 
                Check our calendar and register for an upcoming event.
              </p>
              <Button variant="default" asChild>
                <a href="/walks">View Walks</a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                >
                  <option value="">Select a subject</option>
                  <option value="join-walk">Join a walk</option>
                  <option value="volunteer">Volunteer with us</option>
                  <option value="partnership">Partnership inquiry</option>
                  <option value="general">General question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  placeholder="Tell us more about how we can help..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}