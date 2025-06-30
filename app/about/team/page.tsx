import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Chakka Shombe",
      role: "Founder, CEO and Director",
      bio: "Passionate about creating safe spaces for men to connect and grow.",
      image: "/bios/ChakkaShombe .jpeg"
    },
    {
      name: "Paula Bryan",
      role: "Co-founder, Director and Wellbeing Officer",
      bio: "Supporting the mission to create inclusive spaces for men's wellbeing.",
      image: "/bios/Paula Bryan.jpeg"
    },
    {
      name: "Dirg Aaad Richard",
      role: "Director and Safeguarding Officer",
      bio: "Facilitates walks and ensures everyone feels welcome and heard.",
      image: "/bios/Dirg Aaad Richard.jpeg"
    },
    {
      name: "Tony Harrison",
      role: "Director and Communication Officer",
      bio: "Committed to fostering meaningful connections through walking and conversation.",
      image: "/bios/Tony Harrison .jpeg"
    },
    {
      name: "OriShemma Shombe",
      role: "Senior Administrator",
      bio: "Dedicated to breaking down barriers around men's mental health.",
      image: "/bios/OriShemma Shombe .jpeg"
    },
  ]

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Meet the dedicated individuals behind Men's Walk n Talk.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mx-auto h-32 w-32 rounded-full overflow-hidden mb-6 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-teal font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}