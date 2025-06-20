import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Terms of service for GenHub AI chat platform',
  title: 'Terms of Service - GenHub',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

      <div className="space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using GenHub (&quot;the Service&quot;), you agree to be bound by these
            Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you
            may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Description of Service</h2>
          <p className="mb-4">
            GenHub is an AI chat platform that provides access to various artificial intelligence
            models for conversation, assistance, and content generation. The Service includes web
            and desktop applications.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">User Accounts</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>You must provide accurate and complete information when creating an account</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
            <li>One person or legal entity may not maintain more than one account</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Acceptable Use</h2>
          <p className="mb-2">You agree not to use the Service to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Violate any applicable laws or regulations</li>
            <li>Generate harmful, illegal, or malicious content</li>
            <li>Impersonate others or provide false information</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Attempt to gain unauthorized access to the Service</li>
            <li>Use the Service for commercial purposes without authorization</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Content and Intellectual Property
          </h2>
          <h3 className="mb-2 text-lg font-medium">Your Content</h3>
          <p className="mb-4">
            You retain ownership of content you submit to the Service. By submitting content, you
            grant us a license to use, modify, and display such content as necessary to provide the
            Service.
          </p>

          <h3 className="mb-2 text-lg font-medium">Our Content</h3>
          <p className="mb-4">
            The Service and its original content, features, and functionality are owned by GenHub
            and are protected by international copyright, trademark, and other intellectual property
            laws.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">AI-Generated Content</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>AI-generated content may not always be accurate or reliable</li>
            <li>You are responsible for verifying and validating AI-generated content</li>
            <li>We do not guarantee the accuracy, completeness, or reliability of AI responses</li>
            <li>Use AI-generated content at your own risk and discretion</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Privacy</h2>
          <p className="mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which also governs
            your use of the Service, to understand our practices.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Service Availability</h2>
          <p className="mb-4">
            We strive to provide reliable service, but we do not guarantee that the Service will be
            available at all times. We may modify, suspend, or discontinue the Service at any time.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall GenHub be liable for any indirect, incidental, special, consequential,
            or punitive damages, including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account and access to the Service immediately, without
            prior notice, for conduct that we believe violates these Terms or is harmful to other
            users, us, or third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will notify users of any
            material changes. Continued use of the Service after changes constitutes acceptance of
            the new Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with applicable laws,
            without regard to conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="rounded-lg bg-gray-50 p-4">
            <p>
              Email:{' '}
              <a className="text-blue-600 hover:underline" href="mailto:admin@genhub.app">
                admin@genhub.app
              </a>
            </p>
            <p>
              Website:{' '}
              <a className="text-blue-600 hover:underline" href="https://www.genhub.app">
                www.genhub.app
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
