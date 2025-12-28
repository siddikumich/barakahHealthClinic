export default function Services() {
  const services = [
    {
      title: "Blood pressure checks",
      icon: "🩺",
      description: "Regular monitoring of blood pressure to help prevent and manage hypertension"
    },
    {
      title: "Heart rate & O2 saturation",
      icon: "❤️",
      description: "Comprehensive cardiovascular health assessments"
    },
    {
      title: "Blood glucose",
      icon: "🩸",
      description: "Diabetes screening and monitoring services"
    },
    {
      title: "BMI and lifestyle counseling",
      icon: "⚖️",
      description: "Body mass index assessment with personalized lifestyle recommendations"
    },
    {
      title: "Health education pamphlets",
      icon: "📚",
      description: "Educational materials on diabetes, diet, exercise, and hypertension"
    },
    {
      title: "Culturally sensitive counseling",
      icon: "🌍",
      description: "Available in English, Bangla, and other languages to serve our diverse community"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All services are free and open to anyone. We provide comprehensive preventive health screenings
            and education in a welcoming, culturally responsive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-100 border-l-4 border-green-600 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Culturally Sensitive Care</h2>
          <p className="text-lg text-gray-700 mb-4">
            We understand that healthcare is deeply personal and cultural. Our team provides counseling and
            education in multiple languages including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="text-lg">English</li>
            <li className="text-lg">Bangla (Bengali)</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4 font-semibold">
            All services are completely free and open to anyone in our community.
          </p>
        </div>
      </div>
    </div>
  )
}

