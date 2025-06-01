export default function TermsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Terms and Conditions
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By participating in Men's Walk N Talk CIC activities, you agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Participation</h2>
          <p className="mb-4">
            Participation in our walks and activities is voluntary. Participants must be respectful of others and follow 
            our community guidelines. We reserve the right to refuse participation to anyone who violates these guidelines.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Health and Safety</h2>
          <p className="mb-4">
            Participants join walks at their own risk. We recommend consulting with a healthcare provider before 
            participating if you have any health concerns. Please wear appropriate clothing and footwear for walking.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Privacy and Confidentiality</h2>
          <p className="mb-4">
            What is shared during walks stays confidential. We ask all participants to respect the privacy of others 
            and not share personal information disclosed during our activities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Photography and Media</h2>
          <p className="mb-4">
            We may take photographs during events for promotional purposes. If you do not wish to be photographed, 
            please inform the walk leader.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Donations</h2>
          <p className="mb-4">
            All donations are voluntary and support our community activities. Men's Walk N Talk CIC is a Community 
            Interest Company (CIC: 14514390).
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact</h2>
          <p className="mb-4">
            For questions about these terms, please contact us at menswalkntalk@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}