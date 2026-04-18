import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { DiagnosisPage } from "./pages/DiagnosisPage";
import { ResultPage } from "./pages/ResultPage";
import { LearnMorePage } from "./pages/LearnMorePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/diagnosis",
    Component: DiagnosisPage,
  },
  {
    path: "/result",
    Component: ResultPage,
  },
  {
    path: "/learn-more",
    Component: LearnMorePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/privacy-policy",
    Component: PrivacyPolicyPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);