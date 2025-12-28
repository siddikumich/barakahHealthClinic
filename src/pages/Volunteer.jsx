export default function Volunteer() {
  const roles = [
    {
      title: "Vitals team",
      description: "Measure and record patient vital signs including blood pressure, heart rate, and O2 saturation"
    },
    {
      title: "Clinic flow & patient intake",
      description: "Help manage patient flow, complete intake forms, and ensure smooth clinic operations"
    },
    {
      title: "Health education",
      description: "Provide educational materials and counseling on preventive health topics"
    },
    {
      title: "Translation (Bangla/Urdu/Arabic)",
      description: "Bridge language barriers by providing translation services for patients"
    },
    {
      title: "Logistics & setup",
      description: "Assist with clinic setup, equipment management, and logistical coordination"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Volunteer With Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of compassionate students and clinicians making a difference in our community.
          </p>
        </div>

        {/* Roles Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Volunteer Roles</h2>
            <div className="space-y-6">
              {roles.map((role, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{role.title}</h3>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Requirements</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-gray-700">18+ years of age</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-gray-700">Interest in healthcare or public health</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-gray-700">Willingness to serve with professionalism and respect</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Apply Section */}
        <section>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in providing free, compassionate healthcare to underserved communities
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Apply Here (Google Form)
            </a>
            <p className="text-sm mt-4 opacity-75">
              * Link will be updated with actual Google Form URL
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

