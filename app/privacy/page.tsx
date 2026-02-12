export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F4F8] via-[#B8E8F5] to-[#7FDBFF] dark:from-[#0A1628] dark:via-[#0D2137] dark:to-[#0f3460] text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-28">
        <header className="mb-10 sm:mb-12">
          <p className="font-display text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary dark:text-secondary mb-3">
            Legal
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 max-w-2xl">
            This Privacy Policy explains how WordPlayX collects, uses, and protects your
            information when you use the app and visit this landing page.
          </p>
        </header>

        <section className="space-y-8 text-sm sm:text-base text-gray-700 dark:text-slate-300">
          <div className="bg-white/80 dark:glass rounded-2xl border border-[#00D4FF]/20 dark:border-white/10 p-5 sm:p-6">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              WordPlayX may collect basic usage data such as anonymized analytics, device
              information, and in-game progress. If you contact us for support, we may also
              collect your email address and any details you choose to share.
            </p>
            <p className="mb-0">
              We do not knowingly collect personal information from children under the age
              required by local law. If you believe such data has been provided, please
              contact us so we can remove it.
            </p>
          </div>

          <div className="bg-white/80 dark:glass rounded-2xl border border-[#00D4FF]/20 dark:border-white/10 p-5 sm:p-6">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
              2. How We Use Your Information
            </h2>
            <p className="mb-2">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide and improve the WordPlayX gameplay experience</li>
              <li>Understand how players interact with levels, power-ups, and features</li>
              <li>Fix bugs, prevent abuse, and maintain the security of the app</li>
              <li>Respond to support requests and feedback you send us</li>
            </ul>
          </div>

          <div className="bg-white/80 dark:glass rounded-2xl border border-[#00D4FF]/20 dark:border-white/10 p-5 sm:p-6">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
              3. Data Sharing
            </h2>
            <p className="mb-0">
              We do not sell your personal information. We may use trusted third‑party
              services (such as analytics or app stores) that process limited data on our
              behalf in order to provide core functionality, measure performance, or handle
              purchases. These providers are required to protect your information
              according to their own privacy policies and applicable regulations.
            </p>
          </div>

          <div className="bg-white/80 dark:glass rounded-2xl border border-[#00D4FF]/20 dark:border-white/10 p-5 sm:p-6">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
              4. Your Choices
            </h2>
            <p className="mb-0">
              Depending on your device and platform, you may control analytics, ad
              tracking, and notification permissions from your system settings. If you
              would like to request access to or deletion of data associated with your
              gameplay, please contact us using the details provided in the app store
              listing.
            </p>
          </div>

          <div className="bg-white/80 dark:glass rounded-2xl border border-[#00D4FF]/20 dark:border-white/10 p-5 sm:p-6">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
              5. Updates to This Policy
            </h2>
            <p className="mb-0">
              We may update this Privacy Policy from time to time to reflect new features,
              legal requirements, or improvements to how we communicate about privacy.
              When we make changes, we will update the “Last updated” date below.
            </p>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-500 pt-2">
            Last updated: {new Date().getFullYear()}
          </p>
        </section>
      </div>
    </main>
  );
}

