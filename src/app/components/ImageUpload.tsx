import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  selectedImage: File | null;
  onClear: () => void;
}

export function ImageUpload({
  onImageSelect,
  selectedImage,
  onClear,
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith("image/")) {
      onImageSelect(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      toast.success("X-ray image uploaded successfully!");
    } else {
      toast.error("Please upload an image file (JPG, PNG, etc.).");
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleClear = () => {
    onClear();
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Upload Chest X-Ray
        </h3>
        {selectedImage && (
          <button
            onClick={handleClear}
            className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Clear
          </button>
        )}
      </div>

      {!selectedImage ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-8 sm:p-12 text-center transition-all cursor-pointer ${
            isDragging
              ? "border-[#2A7DE1] bg-blue-50"
              : "border-gray-300 bg-gray-50 hover:border-[#2A7DE1] hover:bg-blue-50"
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Upload className="w-8 h-8 text-[#2A7DE1]" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-900">
                Drop your X-ray image here
              </p>
              <p className="text-sm text-gray-600">
                or click to browse files
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="px-3 py-1 bg-white rounded-full border border-gray-200">
                JPG
              </span>
              <span className="px-3 py-1 bg-white rounded-full border border-gray-200">
                PNG
              </span>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/jpg"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
          {previewUrl && (
            <div className="relative">
              <img
                src={previewUrl}
                alt="X-ray preview"
                className="w-full h-64 sm:h-96 object-contain bg-gray-900"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleClear}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="w-5 h-5 text-[#2A7DE1]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">
                  {selectedImage.name}
                </p>
                <p className="text-sm text-gray-600">
                  {(selectedImage.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}