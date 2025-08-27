import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsOfService() {
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

      {/* Terms of Service Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Welcome to Christ Everywhere</h2>
            <p className="mb-4">
              These Terms of Service ("Terms") govern your use of the Christ Everywhere platform and services. By
              creating an account or using our services, you agree to be bound by these Terms and our Privacy Policy. If
              you do not agree to these Terms, please do not use our services.
            </p>
            <p className="mb-4">
              Christ Everywhere is a faith-based community platform designed to connect believers in meaningful
              fellowship. We are committed to maintaining a safe, respectful, and Christ-centered environment for all
              users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Statement of Faith Agreement</h2>
            <p className="mb-4">
              By using Christ Everywhere, you acknowledge and agree to our Statement of Faith, which forms the
              foundation of our community. All users must affirm their agreement with our core Christian beliefs as
              outlined in our Statement of Faith. Violation of these fundamental principles may result in content
              removal or account suspension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Eligibility and Account Requirements</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>You must be at least 13 years old to use our services</li>
              <li>You must provide accurate and complete information when creating your account</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials</li>
              <li>You may not create multiple accounts or share your account with others</li>
              <li>Accounts previously banned or suspended may not rejoin the platform</li>
              <li>Users convicted of violent or sexually related criminal offenses are prohibited from joining</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Community Guidelines and Conduct</h2>
            <p className="mb-4">
              Christ Everywhere is committed to fostering a community of love, respect, and Christian fellowship. All
              users must:
            </p>

            <h3 className="text-xl font-medium mb-3">Acceptable Behavior</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Treat all community members with kindness, compassion, and respect</li>
              <li>Engage in constructive and edifying conversations</li>
              <li>Respect differing viewpoints within our shared Christian faith</li>
              <li>Share content that encourages and builds up the community</li>
              <li>Protect the privacy and personal information of other users</li>
              <li>Report inappropriate content or behavior to moderators</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Prohibited Activities</h3>
            <p className="mb-4">The following activities are strictly prohibited:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Posting content that is unlawful, harmful, threatening, abusive, or harassing</li>
              <li>Discriminatory language or behavior based on race, gender, age, or other characteristics</li>
              <li>Content that promotes violence, hatred, or illegal activities</li>
              <li>Sharing explicit, inappropriate, or offensive material</li>
              <li>Infringing on intellectual property rights of others</li>
              <li>Spamming, soliciting, or engaging in commercial activities without permission</li>
              <li>Impersonating others or providing false information</li>
              <li>Attempting to hack, disrupt, or compromise platform security</li>
              <li>Sharing personal information of other users without consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Content and Intellectual Property</h2>
            <p className="mb-4">
              You retain ownership of the content you post on Christ Everywhere. However, by posting content, you grant
              us a license to use, display, and distribute your content within our platform for the purpose of providing
              our services.
            </p>
            <p className="mb-4">
              You are responsible for ensuring that your content does not infringe on the rights of others. We reserve
              the right to remove content that violates these Terms or our community guidelines.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Privacy and Safety</h2>
            <p className="mb-4">
              While we strive to maintain a safe environment, we do not conduct criminal background screenings on users.
              We encourage all users to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Exercise caution when sharing personal information</li>
              <li>Use good judgment when meeting other users in person</li>
              <li>Report suspicious or concerning behavior immediately</li>
              <li>Protect your own privacy and that of others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Moderation and Enforcement</h2>
            <p className="mb-4">
              We conduct regular inspections of our platform for safety and fraud protection. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Remove content that violates these Terms or our community guidelines</li>
              <li>Suspend or terminate accounts that engage in prohibited activities</li>
              <li>Investigate reports of misconduct or policy violations</li>
              <li>Cooperate with law enforcement when required</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Subscription and Payment Terms</h2>
            <p className="mb-4">For any paid features or subscriptions:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>You may cancel your subscription at any time through your account settings</li>
              <li>Refunds are provided according to our refund policy</li>
              <li>Price changes will be communicated in advance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              Christ Everywhere is provided "as is" without warranties of any kind. We are not liable for any damages
              arising from your use of our services, including but not limited to direct, indirect, incidental, or
              consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We may update these Terms from time to time. We will notify users of material changes by posting the
              updated Terms on our platform and updating the "Last updated" date. Your continued use of our services
              after such changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Termination</h2>
            <p className="mb-4">
              You may terminate your account at any time by contacting us or using the account deletion feature. We may
              terminate or suspend your account if you violate these Terms or engage in conduct that we determine to be
              harmful to our community.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
            <p className="mb-4">If you have questions about these Terms of Service, please contact us:</p>
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

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the State of Texas, United States. Any disputes arising from these
              Terms or your use of our services will be resolved in the courts of Dallas County, Texas.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
