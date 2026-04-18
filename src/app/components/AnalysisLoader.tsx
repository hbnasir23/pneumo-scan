import { Activity } from "lucide-react";
import { motion } from "motion/react";

export function AnalysisLoader() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 sm:p-12 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex flex-col items-center gap-6">
          {/* Animated Icon */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-20 h-20 bg-gradient-to-br from-[#2A7DE1] to-[#22B8B2] rounded-full flex items-center justify-center"
          >
            <Activity className="w-10 h-10 text-white" />
          </motion.div>

          {/* Text */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">
              Analyzing X-ray...
            </h3>
            <p className="text-gray-600">
              Our AI model is processing your chest X-ray image
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2]"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: "50%" }}
            />
          </div>

          {/* Steps */}
          <div className="w-full space-y-2 text-sm">
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-[#2A7DE1] rounded-full"></div>
              <span className="text-gray-600">Preprocessing image...</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-[#22B8B2] rounded-full"></div>
              <span className="text-gray-600">Running AI analysis...</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                delay: 1,
              }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-gray-600">Generating results...</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
