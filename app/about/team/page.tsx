export default function TeamPage() {
  const teamMembers = [
    {
      name: "Founder 1",
      role: "Co-Founder",
      bio: "Passionate about creating safe spaces for men to connect and grow.",
    },
    {
      name: "Founder 2",
      role: "Co-Founder",
      bio: "Dedicated to breaking down barriers around men's mental health.",
    },
    {
      name: "Walk Leader",
      role: "Community Organizer",
      bio: "Facilitates walks and ensures everyone feels welcome and heard.",
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
              <div className="mx-auto h-32 w-32 rounded-full bg-teal flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-white">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-teal font-medium">{member.role}</p>
              <p className="mt-4 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}