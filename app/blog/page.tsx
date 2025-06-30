import Link from "next/link"

// Mock blog data - in production, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "The Power of Walking Together",
    excerpt: "Exploring how group walks can transform mental health and build lasting friendships among men.",
    date: "2024-01-15",
    author: "Men's Walk n Talk Team",
    category: "Mental Health",
  },
  {
    id: 2,
    title: "Breaking Down Barriers: Men and Vulnerability",
    excerpt: "Why creating safe spaces for men to express emotions is crucial for community wellbeing.",
    date: "2024-01-08",
    author: "Men's Walk n Talk Team",
    category: "Community",
  },
  {
    id: 3,
    title: "Cultural Spaces and Community Connection",
    excerpt: "How visiting museums and galleries opens up new conversations and perspectives.",
    date: "2023-12-20",
    author: "Men's Walk n Talk Team",
    category: "Culture",
  },
]

export default function BlogPage() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blog & Articles
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Stories, insights, and reflections from our community walks and conversations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-teal">
                    {post.category}
                  </p>
                  <div className="mt-2 block">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author}</span>
                    <div className="h-10 w-10 rounded-full bg-teal flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            More articles coming soon. Stay tuned for updates from our community.
          </p>
        </div>
      </div>
    </div>
  )
}