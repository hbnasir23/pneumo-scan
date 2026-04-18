import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Heart, Users, Target, Award } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About PneumoScan</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            Revolutionizing pneumonia detection through artificial intelligence
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At PneumoScan, we're committed to making pneumonia detection faster, more
              accurate, and more accessible through cutting-edge artificial intelligence.
              Our goal is to assist healthcare professionals in providing timely diagnoses
              and improve patient outcomes worldwide.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#2A7DE1]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Patient-Centered
              </h3>
              <p className="text-gray-600">
                Every decision we make prioritizes patient health and wellbeing
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#22B8B2]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Accuracy First
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards of precision in our AI models
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Working together with medical professionals to improve healthcare
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Constantly advancing our technology to serve patients better
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                PneumoScan was founded by a team of medical professionals, AI researchers,
                and healthcare technology experts who recognized the critical need for faster,
                more accessible pneumonia screening tools.
              </p>
              <p>
                Pneumonia remains one of the leading causes of death worldwide, particularly
                affecting children under five and elderly adults. Early detection is crucial
                for effective treatment, yet many regions face challenges in accessing timely
                radiological expertise.
              </p>
              <p>
                By combining advanced deep learning algorithms with medical imaging expertise,
                we've created a tool that can assist healthcare providers in making faster,
                more informed decisions. Our AI model has been trained on thousands of chest
                X-rays and validated by medical professionals to ensure reliability and accuracy.
              </p>
              <p>
                Today, PneumoScan serves as a preliminary screening tool, helping to identify
                potential pneumonia cases that require further medical attention. We continue
                to refine our technology and expand our impact in the global fight against
                pneumonia.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#2A7DE1] mb-2">10,000+</div>
              <div className="text-gray-700">Scans Analyzed</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#22B8B2] mb-2">95.2%</div>
              <div className="text-gray-700">Accuracy Rate</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">&lt;30s</div>
              <div className="text-gray-700">Average Analysis Time</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700">Availability</div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Our Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            PneumoScan is built by a multidisciplinary team combining medical expertise,
            artificial intelligence research, and healthcare technology experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Medical Professionals
              </h3>
              <p className="text-gray-600">
                Board-certified radiologists and pulmonologists who validate our AI
                models and ensure clinical relevance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Researchers
              </h3>
              <p className="text-gray-600">
                PhDs in machine learning and computer vision specializing in medical
                image analysis and deep learning.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Healthcare Engineers
              </h3>
              <p className="text-gray-600">
                Experienced developers building secure, scalable, and user-friendly
                medical technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Join Us in Fighting Pneumonia
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Together, we can make pneumonia detection faster and more accessible for
              everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/diagnosis"
                className="inline-block bg-white text-[#2A7DE1] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Try PneumoScan Now
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
