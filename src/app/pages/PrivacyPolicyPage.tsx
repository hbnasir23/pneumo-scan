import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Shield, Lock, Eye, Database, FileText, AlertCircle } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            Your privacy and data security are our top priorities
          </p>
          <p className="text-sm text-blue-100 mt-4">
            Last Updated: March 15, 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-[#2A7DE1] flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-900 mb-2">
                  HIPAA Compliant
                </h2>
                <p className="text-sm text-gray-600">
                  PneumoScan is committed to maintaining the highest standards of data
                  protection and complies with HIPAA (Health Insurance Portability and
                  Accountability Act) regulations for handling protected health information.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            This Privacy Policy describes how PneumoScan ("we," "us," or "our") collects,
            uses, and protects your personal and medical information when you use our
            pneumonia detection service. By using PneumoScan, you agree to the terms
            outlined in this policy.
          </p>
        </section>

        {/* Key Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Privacy Principles
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Lock className="w-8 h-8 text-[#2A7DE1] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Data Encryption
              </h3>
              <p className="text-sm text-gray-600">
                All data is encrypted in transit and at rest using industry-standard
                AES-256 encryption.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Eye className="w-8 h-8 text-[#22B8B2] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Limited Access
              </h3>
              <p className="text-sm text-gray-600">
                Only authorized personnel have access to your data, and all access is
                logged and monitored.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Database className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                No Data Sharing
              </h3>
              <p className="text-sm text-gray-600">
                We never sell or share your medical data with third parties for
                marketing purposes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <FileText className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Data Retention
              </h3>
              <p className="text-sm text-gray-600">
                Your data is retained only as long as necessary and can be deleted
                upon request.
              </p>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Information We Collect
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                1. Medical Information
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2A7DE1] mt-1">•</span>
                  <span>Chest X-ray images uploaded for analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2A7DE1] mt-1">•</span>
                  <span>Symptom information you provide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2A7DE1] mt-1">•</span>
                  <span>AI analysis results and confidence scores</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                2. Technical Information
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2A7DE1] mt-1">•</span>
                  <span>IP address and browser type</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2A7DE1] mt-1">•</span>
                  <span>Device information and operating system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2A7DE1] mt-1">•</span>
                  <span>Session timestamps and usage patterns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                3. Contact Information (Optional)
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2A7DE1] mt-1">•</span>
                  <span>Email address (if you contact us or create an account)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2A7DE1] mt-1">•</span>
                  <span>Name and phone number (for support inquiries)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How We Use Your Information
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-[#2A7DE1] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                  1
                </span>
                <div>
                  <strong className="text-gray-900">Providing the Service:</strong> To
                  analyze chest X-rays and provide pneumonia detection results
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-[#2A7DE1] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                  2
                </span>
                <div>
                  <strong className="text-gray-900">Improving Our AI:</strong> To train
                  and improve our machine learning models (only with explicit consent)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-[#2A7DE1] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                  3
                </span>
                <div>
                  <strong className="text-gray-900">Security:</strong> To detect and
                  prevent fraud, abuse, and security incidents
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-[#2A7DE1] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                  4
                </span>
                <div>
                  <strong className="text-gray-900">Communication:</strong> To respond to
                  your inquiries and provide customer support
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-[#2A7DE1] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                  5
                </span>
                <div>
                  <strong className="text-gray-900">Legal Compliance:</strong> To comply
                  with applicable laws and regulations
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How We Protect Your Data
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">Encryption:</strong> All data
                transmitted between your device and our servers is encrypted using
                TLS/SSL protocols. Data at rest is encrypted using AES-256 encryption.
              </p>
              <p>
                <strong className="text-gray-900">Access Controls:</strong> We implement
                strict role-based access controls. Only authorized personnel with a
                legitimate need can access protected health information.
              </p>
              <p>
                <strong className="text-gray-900">Secure Infrastructure:</strong> Our
                servers are hosted in HIPAA-compliant data centers with 24/7 monitoring,
                firewalls, and intrusion detection systems.
              </p>
              <p>
                <strong className="text-gray-900">Regular Audits:</strong> We conduct
                regular security audits and vulnerability assessments to ensure the
                ongoing protection of your data.
              </p>
              <p>
                <strong className="text-gray-900">Employee Training:</strong> All
                employees undergo HIPAA training and sign confidentiality agreements.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              Under HIPAA and applicable privacy laws, you have the following rights:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">✓</span>
                <span>
                  <strong className="text-gray-900">Access:</strong> Request access to
                  your medical information
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">✓</span>
                <span>
                  <strong className="text-gray-900">Correction:</strong> Request
                  corrections to inaccurate information
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">✓</span>
                <span>
                  <strong className="text-gray-900">Deletion:</strong> Request deletion
                  of your data (subject to legal requirements)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">✓</span>
                <span>
                  <strong className="text-gray-900">Restriction:</strong> Request
                  restrictions on how we use your data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">✓</span>
                <span>
                  <strong className="text-gray-900">Portability:</strong> Request a copy
                  of your data in a portable format
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">✓</span>
                <span>
                  <strong className="text-gray-900">Accounting:</strong> Request an
                  accounting of disclosures of your information
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              We retain your data only for as long as necessary to provide our services
              and comply with legal obligations:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">•</span>
                <span>
                  <strong className="text-gray-900">Analysis Results:</strong> Stored for
                  90 days, then automatically deleted unless you request otherwise
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">•</span>
                <span>
                  <strong className="text-gray-900">X-ray Images:</strong> Deleted
                  immediately after analysis unless explicitly saved by user
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">•</span>
                <span>
                  <strong className="text-gray-900">Account Information:</strong>{" "}
                  Retained until you request deletion
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">•</span>
                <span>
                  <strong className="text-gray-900">Audit Logs:</strong> Retained for 6
                  years as required by HIPAA
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cookies and Tracking
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              We use essential cookies and similar technologies to provide and improve
              our service:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">•</span>
                <span>
                  <strong className="text-gray-900">Essential Cookies:</strong> Required
                  for basic functionality and security
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">•</span>
                <span>
                  <strong className="text-gray-900">Analytics:</strong> Help us
                  understand how users interact with our service (anonymized)
                </span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              You can control cookies through your browser settings, but disabling
              essential cookies may affect service functionality.
            </p>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Third-Party Services
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              We work with HIPAA-compliant third-party service providers to deliver our
              service:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">•</span>
                <span>Cloud hosting providers (AWS/Google Cloud)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">•</span>
                <span>Email service providers for communications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2A7DE1] mt-1">•</span>
                <span>Security and monitoring services</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              All third parties sign Business Associate Agreements (BAAs) as required by
              HIPAA and are contractually obligated to protect your data.
            </p>
          </div>
        </section>

        {/* Contact and Updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Policy Updates
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of
              any material changes by email or through a prominent notice on our website.
              The "Last Updated" date at the top of this policy indicates when it was
              last revised.
            </p>
          </div>
        </section>

        {/* Contact for Privacy */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#2A7DE1] to-[#22B8B2] rounded-xl p-8 text-white">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Questions About Your Privacy?
                </h2>
                <p className="mb-4">
                  If you have questions about this Privacy Policy or wish to exercise
                  your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> privacy@pneumoscan.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (234) 567-890
                  </p>
                  <p>
                    <strong>Mail:</strong> Privacy Officer, PneumoScan
                    <br />
                    123 Medical Center Drive, Healthcare City, HC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
