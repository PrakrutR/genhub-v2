import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  description: 'Get help and support for GenHub AI chat platform',
  title: 'Help & Support - GenHub',
};

export default function HelpPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Help & Support</h1>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Getting Started</h2>
          <p className="mb-4 text-gray-600">
            Welcome to GenHub! This guide will help you get started with our AI chat platform.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-gray-600">
            <li>Create your account and sign in</li>
            <li>Start a new conversation with an AI model</li>
            <li>Explore different AI models and capabilities</li>
            <li>Customize your chat experience</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">How do I start a conversation?</h3>
              <p className="text-gray-600">
                Click on the chat interface and type your message. GenHub supports multiple AI
                models for different types of conversations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What AI models are available?</h3>
              <p className="text-gray-600">
                GenHub supports various AI models including GPT, Claude, Gemini, and more. You can
                switch between models based on your needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Is my data secure?</h3>
              <p className="text-gray-600">
                Yes, we take data security seriously. Your conversations are encrypted and protected
                according to our privacy policy.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Contact Support</h2>
          <p className="mb-4 text-gray-600">
            Need additional help? Our support team is here to assist you.
          </p>
          <div className="rounded-lg bg-blue-50 p-4">
            <p className="font-medium">Email Support</p>
            <p className="text-gray-600">
              Reach out to us at{' '}
              <a className="text-blue-600 hover:underline" href="mailto:support@genhub.app">
                support@genhub.app
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Additional Resources</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-600">
            <li>
              <a
                className="text-blue-600 hover:underline"
                href="https://github.com/PrakrutR/genhub-v2"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <Link className="text-blue-600 hover:underline" href="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-blue-600 hover:underline" href="/terms">
                Terms of Service
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
