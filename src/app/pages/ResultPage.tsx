import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import {
  AlertTriangle,
  CheckCircle2,
  Activity,
  ArrowRight,
  RefreshCw,
  FileText,
} from "lucide-react";
import { motion } from "motion/react";

interface DiagnosisResult {
  result: "PNEUMONIA" | "NORMAL";
  confidence: string;
  symptoms: any;
  imageUrl: string;
}

export function ResultPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    const storedResult = sessionStorage.getItem("diagnosisResult");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // If no result, redirect to diagnosis page
      navigate("/diagnosis");
    }
  }, [navigate]);

  if (!result) {
    return null;
  }

  const isPneumonia = result.result === "PNEUMONIA";
  // Parse confidence string (e.g., '95.50%') to number
  const confidencePercent = typeof result.confidence === 'string' 
    ? parseFloat(result.confidence.replace('%', '')) || 0 
    : Number(result.confidence) || 0;

  const handleNewScan = () => {
    sessionStorage.removeItem("diagnosisResult");
    navigate("/diagnosis");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Analysis Complete
          </h1>
          <p className="text-lg text-gray-600">
            Here are the results from your chest X-ray analysis
          </p>
        </div>

        {/* Result Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className={`p-6 sm:p-8 shadow-xl border-2 ${
              isPneumonia
                ? "border-red-200 bg-red-50/50"
                : "border-green-200 bg-green-50/50"
            }`}
          >
            <div className="space-y-6">
              {/* Result Header */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isPneumonia ? "bg-red-100" : "bg-green-100"
                  }`}
                >
                  {isPneumonia ? (
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  ) : (
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h2
                    className={`text-2xl sm:text-3xl font-bold mb-2 ${
                      isPneumonia ? "text-red-900" : "text-green-900"
                    }`}
                  >
                    {isPneumonia
                      ? "Possible Pneumonia Detected"
                      : "No Pneumonia Detected"}
                  </h2>
                  <p
                    className={`text-base sm:text-lg ${
                      isPneumonia ? "text-red-700" : "text-green-700"
                    }`}
                  >
                    {isPneumonia
                      ? "The AI model has detected potential signs of pneumonia in your X-ray."
                      : "The scan appears normal based on the AI model analysis."}
                  </p>
                </div>
              </div>

              {/* Confidence Score */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Confidence Score
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {confidencePercent}%
                  </span>
                </div>
                <Progress
                  value={confidencePercent}
                  className={`h-3 ${
                    isPneumonia
                      ? "[&>div]:bg-red-600"
                      : "[&>div]:bg-green-600"
                  }`}
                />
                <p className="text-xs text-gray-600">
                  The model is {confidencePercent}% confident in this prediction
                </p>
              </div>

              {/* Recommendation */}
              <div
                className={`rounded-lg p-4 ${
                  isPneumonia ? "bg-red-100" : "bg-green-100"
                }`}
              >
                <div className="flex items-start gap-3">
                  <Activity
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      isPneumonia ? "text-red-700" : "text-green-700"
                    }`}
                  />
                  <div>
                    <h3
                      className={`font-semibold mb-1 ${
                        isPneumonia ? "text-red-900" : "text-green-900"
                      }`}
                    >
                      {isPneumonia
                        ? "Recommended Action"
                        : "What This Means"}
                    </h3>
                    <p
                      className={`text-sm ${
                        isPneumonia ? "text-red-800" : "text-green-800"
                      }`}
                    >
                      {isPneumonia
                        ? "Please consult a medical professional immediately for further diagnosis and treatment. This AI analysis is not a substitute for professional medical advice."
                        : "While the AI model indicates a normal scan, if you're experiencing symptoms, please consult with a healthcare professional for a comprehensive evaluation."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* X-ray Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6"
        >
          <Card className="p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Analyzed X-ray Image
            </h3>
            <div className="rounded-lg overflow-hidden bg-gray-900">
              <img
                src={result.imageUrl}
                alt="Analyzed X-ray"
                className="w-full h-64 sm:h-80 object-contain"
              />
            </div>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={handleNewScan}
            className="flex-1 bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2] hover:opacity-90 text-white py-6"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Start New Scan
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 py-6"
            onClick={() => window.print()}
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Report
          </Button>
        </motion.div>

        {/* Medical Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="p-6 bg-amber-50 border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-900">
                <p className="font-semibold mb-2">Important Medical Disclaimer</p>
                <p className="leading-relaxed">
                  This AI-powered analysis is designed for preliminary screening
                  purposes only and should NOT replace professional medical
                  diagnosis. The results are based on machine learning models
                  that may have limitations. Always consult with a qualified
                  healthcare professional for proper diagnosis, treatment, and
                  medical advice. If you're experiencing severe symptoms, seek
                  immediate medical attention.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Next Steps */}
        {isPneumonia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6"
          >
            <Card className="p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Next Steps
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2A7DE1] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <p className="text-gray-700">
                    Schedule an appointment with your doctor or pulmonologist
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2A7DE1] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <p className="text-gray-700">
                    Bring this analysis report and your X-ray to your
                    appointment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2A7DE1] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <p className="text-gray-700">
                    Follow your doctor's recommendations for further testing or
                    treatment
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}