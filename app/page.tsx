export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Record form fills once,{' '}
          <span className="text-[#58a6ff]">replay everywhere</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FormReplay captures your form-filling patterns and intelligently replays them across similar forms — saving developers and QA engineers hours of repetitive data entry.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial — $9/mo
          </a>
          <a
            href="#faq"
            className="px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> One-click recording</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cross-device sync</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Smart field matching</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Works on any site</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited form patterns</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Sync across all devices</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Smart field detection</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Priority support</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 7-day free trial</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Free
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No questions asked.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-6">
            <h3 className="font-semibold text-white mb-2">How does form recording work?</h3>
            <p className="text-[#8b949e] text-sm">Install the browser extension, click Record, and fill out any form normally. FormReplay captures each field's selector, label, and value. On similar forms, it matches fields intelligently and fills them automatically.</p>
          </div>
          <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-6">
            <h3 className="font-semibold text-white mb-2">Which browsers are supported?</h3>
            <p className="text-[#8b949e] text-sm">FormReplay works on Chrome, Edge, and any Chromium-based browser. Firefox support is on the roadmap. The extension syncs patterns to your account so they're available on every device you install it on.</p>
          </div>
          <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-6">
            <h3 className="font-semibold text-white mb-2">Is my data secure?</h3>
            <p className="text-[#8b949e] text-sm">All recorded patterns are encrypted in transit and at rest. Sensitive fields like passwords are never recorded. You can delete any pattern or your entire account at any time from the extension popup.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} FormReplay. All rights reserved.
      </footer>
    </main>
  )
}
