import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Brain, Database, Zap, Shield, Target, TrendingUp, CheckCircle } from "lucide-react";

export function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            How PneumoScan Works
          </h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            Discover the advanced AI technology powering our pneumonia detection system
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            AI-Powered Pneumonia Detection
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            PneumoScan utilizes state-of-the-art deep learning technology to analyze chest X-ray
            images and detect signs of pneumonia. Our system combines computer vision and machine
            learning to provide fast, accurate preliminary screening results.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The model has been trained on thousands of chest X-ray images to recognize patterns
            and features associated with pneumonia, helping healthcare professionals make more
            informed decisions.
          </p>
        </section>

        {/* Model Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Model Architecture
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Convolutional Neural Network (CNN)
            </h3>
            <p className="text-gray-600 mb-6">
              Our model is based on a deep Convolutional Neural Network architecture, 
              specifically designed for medical image analysis. The architecture includes:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2A7DE1] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multiple Convolutional Layers</h4>
                    <p className="text-sm text-gray-600">
                      Extract hierarchical features from X-ray images, from basic edges to complex patterns
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2A7DE1] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pooling Layers</h4>
                    <p className="text-sm text-gray-600">
                      Reduce spatial dimensions while retaining important features
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2A7DE1] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Batch Normalization</h4>
                    <p className="text-sm text-gray-600">
                      Stabilize and accelerate training for better performance
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2A7DE1] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dropout Layers</h4>
                    <p className="text-sm text-gray-600">
                      Prevent overfitting and improve model generalization
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2A7DE1] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dense Classification Layers</h4>
                    <p className="text-sm text-gray-600">
                      Final decision-making layers with softmax activation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2A7DE1] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transfer Learning</h4>
                    <p className="text-sm text-gray-600">
                      Built on pre-trained models fine-tuned for medical imaging
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Technical Specifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Framework</div>
                <div className="text-lg font-semibold text-gray-900">
                  TensorFlow / PyTorch
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Input Resolution</div>
                <div className="text-lg font-semibold text-gray-900">
                  224 × 224 pixels
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Model Size</div>
                <div className="text-lg font-semibold text-gray-900">
                  ~85 MB
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Parameters</div>
                <div className="text-lg font-semibold text-gray-900">
                  ~23 Million
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Inference Time</div>
                <div className="text-lg font-semibold text-gray-900">
                  &lt; 2 seconds
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Backend API</div>
                <div className="text-lg font-semibold text-gray-900">
                  Python FastAPI
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Training Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-[#2A7DE1]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dataset
              </h3>
              <p className="text-gray-600 mb-4">
                Trained on over 5,800 chest X-ray images from multiple medical databases
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Normal chest X-rays</li>
                <li>• Bacterial pneumonia cases</li>
                <li>• Viral pneumonia cases</li>
                <li>• Data augmentation applied</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#22B8B2]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced optimization techniques for maximum accuracy
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Adam optimizer</li>
                <li>• Learning rate scheduling</li>
                <li>• Cross-entropy loss function</li>
                <li>• Early stopping mechanism</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Validation
              </h3>
              <p className="text-gray-600 mb-4">
                Rigorous testing and validation processes
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• K-fold cross-validation</li>
                <li>• Independent test set</li>
                <li>• Confusion matrix analysis</li>
                <li>• ROC-AUC evaluation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Performance Metrics
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2A7DE1] mb-2">95.2%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#22B8B2] mb-2">93.8%</div>
                <div className="text-gray-600">Sensitivity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">96.5%</div>
                <div className="text-gray-600">Specificity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">0.98</div>
                <div className="text-gray-600">AUC Score</div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-semibold text-gray-900 mb-4">What These Metrics Mean:</h4>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong className="text-gray-900">Accuracy:</strong> Overall percentage of correct predictions across all test cases
                </p>
                <p>
                  <strong className="text-gray-900">Sensitivity (Recall):</strong> Ability to correctly identify pneumonia cases (true positive rate)
                </p>
                <p>
                  <strong className="text-gray-900">Specificity:</strong> Ability to correctly identify normal cases (true negative rate)
                </p>
                <p>
                  <strong className="text-gray-900">AUC Score:</strong> Overall model performance across all classification thresholds
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Analysis Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2A7DE1] to-[#22B8B2] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Upload X-Ray</h3>
              <p className="text-sm text-gray-600">
                User uploads chest X-ray image through secure interface
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2A7DE1] to-[#22B8B2] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Preprocessing</h3>
              <p className="text-sm text-gray-600">
                Image is resized, normalized, and prepared for model input
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2A7DE1] to-[#22B8B2] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-600">
                Deep learning model analyzes image features and patterns
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2A7DE1] to-[#22B8B2] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
              <p className="text-sm text-gray-600">
                Prediction with confidence score displayed to user
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Brain className="w-10 h-10 text-[#2A7DE1] mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Advanced AI
              </h3>
              <p className="text-sm text-gray-600">
                State-of-the-art deep learning algorithms trained on medical data
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Zap className="w-10 h-10 text-[#22B8B2] mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Fast Processing
              </h3>
              <p className="text-sm text-gray-600">
                Results delivered in under 30 seconds for quick screening
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Shield className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-sm text-gray-600">
                HIPAA-compliant data handling and encryption protocols
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Target className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                High Accuracy
              </h3>
              <p className="text-sm text-gray-600">
                95%+ accuracy validated on independent test datasets
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="font-semibold text-amber-900 mb-2">Important Notice</h3>
          <p className="text-sm text-amber-800">
            PneumoScan is designed as a preliminary screening tool to assist healthcare
            professionals. It is not a replacement for professional medical diagnosis.
            Always consult with qualified radiologists and physicians for proper diagnosis
            and treatment decisions. The AI model's predictions should be used in conjunction
            with clinical judgment and other diagnostic methods.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
