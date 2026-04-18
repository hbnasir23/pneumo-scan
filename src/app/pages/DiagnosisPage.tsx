import { useState } from "react";
import { useNavigate } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageUpload } from "../components/ImageUpload";
import { SymptomsForm, Symptoms } from "../components/SymptomsForm";
import { AnalysisLoader } from "../components/AnalysisLoader";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { AlertCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";

export function DiagnosisPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [symptoms, setSymptoms] = useState<Symptoms>({
    fever: false,
    cough: false,
    chestPain: false,
    shortnessOfBreath: false,
    fatigue: false,
    difficultyBreathing: false,
    otherSymptoms: "",
  });

  const handleAnalyze = async () => {
    if (!selectedImage) {
      toast.error("Please upload an X-ray image first");
      return;
    }

    toast.success("Starting AI analysis...");
    setIsAnalyzing(true);

    // Simulate API call to Python ML backend
    // In production, replace this with actual API integration:
    // 
    // const formData = new FormData();
    // formData.append('xray_image', selectedImage);
    // formData.append('symptoms', JSON.stringify(symptoms));
    // 
    // try {
    //   const response = await fetch('YOUR_PYTHON_API_ENDPOINT/analyze', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   const result = await response.json();
    //   sessionStorage.setItem("diagnosisResult", JSON.stringify(result));
    //   navigate("/result");
    // } catch (error) {
    //   console.error('Analysis failed:', error);
    //   alert('Analysis failed. Please try again.');
    // } finally {
    //   setIsAnalyzing(false);
    // }

    setTimeout(() => {
      // Generate mock result data
      const mockResult = {
        prediction: Math.random() > 0.5 ? "pneumonia" : "normal",
        confidence: Math.random() * 0.3 + 0.7, // 70-100%
        symptoms: symptoms,
        imageUrl: URL.createObjectURL(selectedImage),
      };

      // Store result in sessionStorage for the result page
      sessionStorage.setItem("diagnosisResult", JSON.stringify(mockResult));

      setIsAnalyzing(false);
      navigate("/result");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {isAnalyzing && <AnalysisLoader />}

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Start Your Diagnosis
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your chest X-ray and provide symptom information for AI
            analysis
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-6 sm:p-8 shadow-xl border-gray-200">
          <div className="space-y-8">
            {/* Image Upload Section */}
            <ImageUpload
              onImageSelect={setSelectedImage}
              selectedImage={selectedImage}
              onClear={() => setSelectedImage(null)}
            />

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  And provide symptoms
                </span>
              </div>
            </div>

            {/* Symptoms Form Section */}
            <SymptomsForm symptoms={symptoms} onChange={setSymptoms} />

            {/* Info Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-[#2A7DE1] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-medium mb-1">How it works</p>
                  <p>
                    Our AI model analyzes the uploaded X-ray image along with
                    your symptoms to provide an accurate preliminary assessment.
                    Results are generated within seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* Analyze Button */}
            <Button
              size="lg"
              onClick={handleAnalyze}
              disabled={!selectedImage || isAnalyzing}
              className="w-full bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2] hover:opacity-90 text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Analyze X-Ray with AI
            </Button>
          </div>
        </Card>

        {/* Bottom Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This tool is for preliminary screening only. Always consult a
            healthcare professional.
          </p>
        </div>
      </main>
      <Toaster />
      <Footer />
    </div>
  );
}