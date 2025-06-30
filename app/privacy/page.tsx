export default function PrivacyPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            When you register for walks or contact us, we may collect:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your name and contact information</li>
            <li>Emergency contact details</li>
            <li>Any health information you choose to share</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Organize and communicate about walks and events</li>
            <li>Ensure participant safety</li>
            <li>Improve our services</li>
            <li>Send updates about our activities (with your consent)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Protection</h2>
          <p className="mb-4">
            We are committed to protecting your personal data. We:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Store information securely</li>
            <li>Only share data with your explicit consent</li>
            <li>Delete information upon request</li>
            <li>Never sell your data to third parties</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookies</h2>
          <p className="mb-4">
            Our website uses minimal cookies for basic functionality. We do not use tracking or advertising cookies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
          <p className="mb-4">
            For privacy-related questions or to exercise your rights, contact us at:
          </p>
          <p className="mb-4">
            Email: Menswalkntalkoutreach@outlook.com<br />
            Address: International House, 3Space, 6 Canterbury Cres, London SW9 7QD
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any significant changes.
          </p>
        </div>
      </div>
    </div>
  )
}