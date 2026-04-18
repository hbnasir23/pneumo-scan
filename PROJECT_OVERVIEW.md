# PneumoScan - Pneumonia Detection System

## Overview
A modern, minimal, and responsive medical web application UI for pneumonia detection using AI. Built with React.js, TypeScript, and Tailwind CSS.

## Features
- **Landing Page**: Introduction with features and statistics
- **Diagnosis Page**: Upload chest X-rays and enter symptoms
- **Result Page**: View AI analysis results with confidence scores
- **Responsive Design**: Optimized for desktop, tablet, and mobile

## Tech Stack
- React 18.3.1
- TypeScript
- React Router 7
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide React Icons
- Radix UI Components

## Project Structure
```
/src/app/
├── App.tsx              # Main app entry with RouterProvider
├── routes.tsx           # React Router configuration
├── pages/
│   ├── LandingPage.tsx  # Hero page with introduction
│   ├── DiagnosisPage.tsx # Main diagnosis interface
│   ├── ResultPage.tsx   # Results display
│   └── NotFound.tsx     # 404 page
└── components/
    ├── Navbar.tsx       # Navigation component
    ├── ImageUpload.tsx  # Drag & drop X-ray upload
    ├── SymptomsForm.tsx # Symptom checklist form
    └── AnalysisLoader.tsx # Loading animation
```

## Color Scheme
- **Primary**: Medical Blue (#2A7DE1)
- **Secondary**: Teal (#22B8B2)
- **Success**: Soft Green
- **Warning**: Soft Red
- **Background**: White / Light Gray

## API Integration
The frontend is ready for Python ML backend integration. See `/src/app/pages/DiagnosisPage.tsx` for API integration comments.

### Expected API Endpoint
```typescript
POST /analyze
Content-Type: multipart/form-data

Body:
- xray_image: File
- symptoms: JSON string

Response:
{
  prediction: "pneumonia" | "normal",
  confidence: number (0-1),
  symptoms: object,
  imageUrl: string (optional)
}
```

## Running the Application
```bash
npm install
npm run dev
```

## Key Components

### ImageUpload
- Drag & drop functionality
- File preview
- Accepts JPG/PNG formats
- Clear/reset functionality

### SymptomsForm
- Checkbox-based symptom selection
- Optional text area for additional symptoms
- Real-time state management

### AnalysisLoader
- Animated loading screen
- Progress indicator
- Processing steps visualization

### ResultPage
- Positive/negative detection display
- Confidence score with progress bar
- Actionable recommendations
- X-ray image preview
- Medical disclaimer

## Responsive Breakpoints
- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1440px+

## Medical Disclaimer
This application is designed for preliminary screening purposes only and should NOT replace professional medical diagnosis. Always consult with qualified healthcare professionals.

## Future Enhancements
- User authentication
- History tracking
- PDF report generation
- Multiple language support
- Accessibility improvements (WCAG 2.1 AA)
