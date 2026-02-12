export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F4F8] via-[#B8E8F5] to-[#7FDBFF] dark:from-[#0A1628] dark:via-[#0D2137] dark:to-[#0f3460] text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-gray-600 dark:text-slate-400 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-sm sm:text-base text-gray-700 dark:text-slate-200 leading-relaxed bg-white/80 dark:bg-white/5 border border-[#00D4FF]/25 dark:border-white/10 rounded-2xl p-5 sm:p-8 shadow-lg">
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the WordPlayX mobile application
            and related services (collectively, the &quot;Service&quot;). By accessing or using the Service, you
            agree to be bound by these Terms.
          </p>

          <section>
            <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Use of the Service</h2>
            <p>
              You may use WordPlayX solely for personal, non-commercial entertainment purposes and only in
              compliance with these Terms and applicable laws. You agree not to misuse the Service, attempt to
              interfere with its operation, or access it using any method other than the interfaces and
              instructions we provide.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Account &amp; Progress</h2>
            <p>
              Certain features, such as saving level history or statistics, may require storing gameplay data on
              your device or through our services. You are responsible for maintaining the security of your
              device and any login credentials used with the Service.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Virtual Items</h2>
            <p>
              WordPlayX may include virtual items such as coins, power-ups, or other in‑game content. These are
              licensed, not sold, and have no real‑world monetary value. We may modify, manage, or discontinue
              virtual items at any time, with or without notice.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Intellectual Property</h2>
            <p>
              All content in the Service, including game design, graphics, logos, and text, is owned by or
              licensed to us and is protected by intellectual property laws. You may not copy, modify, distribute,
              or create derivative works from the Service except as expressly permitted by us.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Disclaimer &amp; Limitation of Liability</h2>
            <p>
              The Service is provided &quot;as is&quot; without warranties of any kind, whether express or
              implied. To the fullest extent permitted by law, we are not liable for any indirect, incidental, or
              consequential damages arising from your use of or inability to use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will revise the &quot;Last updated&quot;
              date above. Your continued use of WordPlayX after any changes means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Contact Us</h2>
            <p>
              If you have any questions about these Terms &amp; Conditions, you can contact us from within the
              app or via our designated support channel.
            </p>
          </section>
        </div>

        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}

