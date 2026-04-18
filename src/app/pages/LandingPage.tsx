import { useNavigate } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Activity, Upload, Brain, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <Activity className="w-4 h-4 text-[#2A7DE1]" />
                <span className="text-sm text-[#2A7DE1] font-medium">
                  AI-Powered Detection
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                PneumoScan
              </h1>
              <p className="text-xl text-gray-600">
                Pneumonia Detection System
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Upload a chest X-ray image and enter symptoms to detect possible
              pneumonia using AI. Fast, accurate, and designed to assist
              healthcare professionals and patients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/diagnosis")}
                className="bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2] hover:opacity-90 text-white px-8 py-6 text-lg"
              >
                Start Diagnosis
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/learn-more")}
                className="border-gray-300 text-gray-700 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-[#2A7DE1]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Advanced machine learning
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Upload className="w-5 h-5 text-[#22B8B2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Easy Upload</h3>
                  <p className="text-sm text-gray-600">
                    Drag & drop interface
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Secure</h3>
                  <p className="text-sm text-gray-600">
                    Private & confidential
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659353887269-8922b7c486d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYWklMjBsdW5ncyUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzczNTcxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medical AI Healthcare"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#2A7DE1]">95%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#22B8B2]">&lt;30s</div>
                  <div className="text-sm text-gray-600">Analysis Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <p className="text-sm text-amber-800 text-center">
            <strong>Medical Disclaimer:</strong> This tool is designed to
            assist in preliminary screening only. Always consult with a
            qualified healthcare professional for proper diagnosis and
            treatment.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}