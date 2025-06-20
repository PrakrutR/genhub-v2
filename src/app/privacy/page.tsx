import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Privacy policy for GenHub AI chat platform',
  title: 'Privacy Policy - GenHub',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

      <div className="space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Introduction</h2>
          <p className="mb-4">
            Welcome to GenHub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you
            use our AI chat platform.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Information We Collect</h2>
          <h3 className="mb-2 text-lg font-medium">Personal Information</h3>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>Account information (email, username)</li>
            <li>Profile information you choose to provide</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="mb-2 text-lg font-medium">Usage Information</h3>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>Chat conversations and interactions</li>
            <li>Usage patterns and preferences</li>
            <li>Technical information about your device and browser</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>To provide and maintain our AI chat services</li>
            <li>To improve and personalize your experience</li>
            <li>To communicate with you about our services</li>
            <li>To ensure security and prevent fraud</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures to protect your
            personal information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Data Retention</h2>
          <p className="mb-4">
            We retain your personal information only for as long as necessary to fulfill the
            purposes outlined in this Privacy Policy, unless a longer retention period is required
            by law.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Your Rights</h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Restrict processing of your information</li>
            <li>Data portability</li>
            <li>Object to processing</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Third-Party Services</h2>
          <p className="mb-4">
            Our platform may integrate with third-party AI services. Please review their respective
            privacy policies to understand how they handle your data.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot;
            date.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
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
