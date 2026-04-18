import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export interface Symptoms {
  fever: boolean;
  cough: boolean;
  chestPain: boolean;
  shortnessOfBreath: boolean;
  fatigue: boolean;
  difficultyBreathing: boolean;
  otherSymptoms: string;
}

interface SymptomsFormProps {
  symptoms: Symptoms;
  onChange: (symptoms: Symptoms) => void;
}

export function SymptomsForm({ symptoms, onChange }: SymptomsFormProps) {
  const handleCheckboxChange = (field: keyof Symptoms, checked: boolean) => {
    onChange({ ...symptoms, [field]: checked });
  };

  const handleTextChange = (value: string) => {
    onChange({ ...symptoms, otherSymptoms: value });
  };

  const symptomsList = [
    { id: "fever", label: "Fever", field: "fever" as keyof Symptoms },
    { id: "cough", label: "Cough", field: "cough" as keyof Symptoms },
    {
      id: "chestPain",
      label: "Chest Pain",
      field: "chestPain" as keyof Symptoms,
    },
    {
      id: "shortnessOfBreath",
      label: "Shortness of Breath",
      field: "shortnessOfBreath" as keyof Symptoms,
    },
    { id: "fatigue", label: "Fatigue", field: "fatigue" as keyof Symptoms },
    {
      id: "difficultyBreathing",
      label: "Difficulty Breathing",
      field: "difficultyBreathing" as keyof Symptoms,
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Select Your Symptoms
      </h3>

      <div className="space-y-3">
        {symptomsList.map((symptom) => (
          <div
            key={symptom.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Checkbox
              id={symptom.id}
              checked={symptoms[symptom.field] as boolean}
              onCheckedChange={(checked) =>
                handleCheckboxChange(symptom.field, checked as boolean)
              }
              className="data-[state=checked]:bg-[#2A7DE1] data-[state=checked]:border-[#2A7DE1]"
            />
            <Label
              htmlFor={symptom.id}
              className="text-gray-700 cursor-pointer flex-1"
            >
              {symptom.label}
            </Label>
          </div>
        ))}
      </div>

      <div className="space-y-2 pt-2">
        <Label htmlFor="otherSymptoms" className="text-gray-700">
          Other Symptoms (Optional)
        </Label>
        <Textarea
          id="otherSymptoms"
          placeholder="Describe any other symptoms you're experiencing..."
          value={symptoms.otherSymptoms}
          onChange={(e) => handleTextChange(e.target.value)}
          className="resize-none h-24 border-gray-300 focus:border-[#2A7DE1] focus:ring-[#2A7DE1]"
        />
      </div>
    </div>
  );
}
