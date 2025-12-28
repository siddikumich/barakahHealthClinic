export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide free, culturally sensitive preventive health services to underserved and immigrant
              communities in Southeast Michigan through compassion, education, and community partnership. 
              <span className="font-semibold text-green-700"> We emphasize serving Bengali communities</span> and 
              other immigrant populations who face barriers to accessing healthcare.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-6">What We Do</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Vitals screenings</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Chronic disease education</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Preventive consultations with licensed clinicians</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Referrals to community resources</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Barakah Health Clinic began as a gap-year initiative by students who noticed limited access to
              preventive care among Bengali and immigrant families attending local mosques. With support
              from volunteer clinicians and community leaders, we built a mobile free clinic model that brings
              care directly to the community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our model eliminates transportation barriers, language barriers, and financial concerns by meeting
              patients where they already gather—at their places of worship and community centers. This approach
              has allowed us to serve over 100 patients across 4 clinic locations, and we continue to grow.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Founder / Program Director</h3>
                <p className="text-gray-600">Ibrahim Isam</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Medical Director</h3>
                <p className="text-gray-600">Mubina Khan MD</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Operations Lead</h3>
                <p className="text-gray-600">[Name]</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Volunteer Coordinator</h3>
                <p className="text-gray-600">[Name]</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Medical Assistant Coordinator</h3>
                <p className="text-gray-600">[Name]</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Outreach</h3>
                <p className="text-gray-600">[Name]</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

