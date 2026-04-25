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

    // Reset state and start analysis
    setIsAnalyzing(true);
    const toastId = toast.loading("AI is scanning your X-ray...");

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);
      // Map symptoms to the keys the API expects
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
        throw new Error("Server communication failed");
      }

      const data = await response.json();

      // 1. HANDLE VALIDATION ERRORS (The "Give only chest X-ray man!" check)
      if (data.result === "ERROR") {
        toast.dismiss(toastId);
        toast.error(data.message || "Invalid image detected", {
          description: "Please ensure you are uploading a clear, grayscale Chest X-ray.",
          duration: 5000,
        });
        setIsAnalyzing(false);
        return; // STOP HERE: Do not navigate to results
      }

      // 2. HANDLE SUCCESSFUL DIAGNOSIS
      if (data.result === "NORMAL" || data.result === "PNEUMONIA") {
        toast.dismiss(toastId);
        
        const analysisResult = {
          result: data.result,
          confidence: data.confidence,
          symptoms: symptoms,
          imageUrl: URL.createObjectURL(selectedImage),
        };

        // Store result in sessionStorage for the results page
        sessionStorage.setItem("diagnosisResult", JSON.stringify(analysisResult));
        
        toast.success("Analysis complete!");
        navigate("/result");
      }
    } catch (error) {
      toast.dismiss(toastId);
      console.error("Analysis failed:", error);
      toast.error("Connection Error", {
        description: "Could not reach the AI engine. Please check your internet.",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Navbar />

      {isAnalyzing && <AnalysisLoader />}

      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Header - More compact on mobile */}
        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Start Your Diagnosis
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Upload your chest X-ray and provide symptom information for AI
            analysis
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="p-4 sm:p-8 shadow-xl border-gray-200 overflow-hidden">
          <div className="flex flex-col gap-6 sm:gap-8">
            
            {/* Image Upload - Ensure it scales properly */}
            <div className="w-full">
              <ImageUpload
                onImageSelect={setSelectedImage}
                selectedImage={selectedImage}
                onClear={() => setSelectedImage(null)}
              />
            </div>

            {/* Visual Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm uppercase tracking-wider">
                <span className="px-4 bg-white text-gray-400 font-medium">
                  Step 2: Symptoms
                </span>
              </div>
            </div>

            {/* Symptoms Form */}
            <div className="w-full">
              <SymptomsForm symptoms={symptoms} onChange={setSymptoms} />
            </div>

            {/* Info Banner - Hidden on very small screens or made more compact */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-[#2A7DE1] flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                  <p className="font-semibold mb-1">AI Protocol</p>
                  <p>
                    Our system checks image quality (grayscale brightness) before 
                    fusing visual data with clinical symptoms for the final result.
                  </p>
                </div>
              </div>
            </div>

            {/* Analyze Button - Sticky-ready or full width */}
            <div className="pt-2">
              <Button
                size="lg"
                onClick={handleAnalyze}
                disabled={!selectedImage || isAnalyzing}
                className="w-full bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2] hover:opacity-95 text-white py-6 sm:py-7 text-base sm:text-lg font-semibold shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {isAnalyzing ? "Processing..." : "Analyze X-Ray with AI"}
              </Button>
            </div>
          </div>
        </Card>

        {/* Disclaimer */}
        <div className="mt-6 sm:mt-8 text-center px-4">
          <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-medium">
            Medical Disclaimer
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Preliminary screening only. Not a substitute for professional medical advice.
          </p>
        </div>
      </main>

      <Toaster position="top-center" richColors />
      <Footer />
    </div>
  );
}