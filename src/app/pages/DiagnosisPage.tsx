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

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("fever", String(symptoms.fever));
      formData.append("cough", String(symptoms.cough));
      formData.append("fatigue", String(symptoms.fatigue));

      const response = await fetch(
        "https://harisbinnasir-pneumonia-detection-api.hf.space/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to analyze image");
      }

      const data = await response.json();

      if (data.result === "ERROR") {
        toast.error(data.message || "An error occurred during analysis");
        setIsAnalyzing(false);
        return;
      }

      if (data.result === "NORMAL" || data.result === "PNEUMONIA") {
        const analysisResult = {
          result: data.result,
          confidence: data.confidence,
          symptoms: symptoms,
          imageUrl: URL.createObjectURL(selectedImage),
        };

        sessionStorage.setItem("diagnosisResult", JSON.stringify(analysisResult));
        navigate("/result");
      }
    } catch (error) {
      console.error("Analysis failed:", error);
      toast.error("Analysis failed. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
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