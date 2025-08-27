import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christ%20Everywhere%20Logo-FvEFWHSc06rutBvhp3xXYpBxSnnutM.png"
                alt="Christ Everywhere Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-primary">Christ Everywhere</span>
            </Link>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Commitment to Your Privacy</h2>
            <p className="mb-4">
              At Christ Everywhere, we are committed to protecting your privacy and handling your personal information
              with care and respect. As a faith-based community platform, we understand the sensitive nature of
              spiritual conversations and personal prayer requests. This Privacy Policy explains how we collect, use,
              protect, and share your information when you use our services.
            </p>
            <p className="mb-4">
              <strong>
                We do not sell, rent, or trade your personal information to third parties for commercial purposes.
              </strong>
              Your trust is sacred to us, and we operate with the highest standards of data protection and Christian
              integrity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Information We Collect</h2>

            <h3 className="text-xl font-medium mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and email address (required for account creation)</li>
              <li>Profile picture (optional)</li>
              <li>Church or organization affiliation (optional)</li>
              <li>Prayer requests and spiritual content you choose to share</li>
              <li>Messages and communications within groups</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Usage Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>How you interact with our platform and features</li>
              <li>Device information (type, operating system, browser)</li>
              <li>Log data (IP address, access times, pages viewed)</li>
              <li>Location data (only if you explicitly grant permission)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and maintain our community platform services</li>
              <li>Facilitate connections within your faith communities</li>
              <li>Enable prayer sharing and spiritual support features</li>
              <li>Send important updates about our services</li>
              <li>Ensure platform safety and prevent abuse</li>
              <li>Improve our features based on user feedback</li>
              <li>Provide customer support when needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Information Sharing and Disclosure</h2>
            <p className="mb-4">We only share your information in the following limited circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Within Your Groups:</strong> Content you post in groups is visible to other group members
              </li>
              <li>
                <strong>Service Providers:</strong> Trusted third-party services that help us operate our platform (with
                strict data protection agreements)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect the safety of our users
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger or acquisition (with continued privacy
                protection)
              </li>
            </ul>
            <p className="mb-4">
              <strong>We never sell your personal data or use it for advertising purposes.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Data Security</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Access controls limiting who can view your information</li>
              <li>Secure data centers with physical and digital protections</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Your Rights and Choices</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Control your privacy settings within groups</li>
              <li>Opt out of non-essential communications</li>
              <li>Request a copy of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Children's Privacy</h2>
            <p className="mb-4">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
              the new policy on our website and updating the "Last updated" date. Your continued use of our services
              after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none mb-4">
              <li>
                <strong>Email:</strong> contact@christeverywhere.org
              </li>
              <li>
                <strong>Phone:</strong> 469-238-2555
              </li>
              <li>
                <strong>Mailing Address:</strong>
              </li>
              <li>Christ Everywhere</li>
              <li>1910 Pacific Ave, Suite 2000-1817</li>
              <li>Dallas, TX 75201</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
