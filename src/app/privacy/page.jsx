'use client';

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-white px-6 pt-32 py-16 text-neutral-800'>
      <div className='m-auto max-w-3xl'>
        <h1 className='mb-2 text-4xl font-bold text-neutral-900'>Privacy Policy</h1>
        <p className='mb-12 text-sm text-neutral-500'>Last updated: May 24, 2026</p>

        <section className='mb-10'>
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900'>1. Information We Collect</h2>
          <p className='mb-3 text-sm leading-relaxed text-neutral-600'>
            We collect information you voluntarily provide when filling out inquiry forms on our website, including your name, email address, phone number, and any message you choose to submit.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900'>2. UTM Link Tracking</h2>
          <p className='mb-3 text-sm leading-relaxed text-neutral-600'>
            When you visit our website through a link from a third-party source, we capture UTM parameters from that URL for marketing attribution. These parameters include source, medium, campaign, content, and term.
          </p>
          <p className='mb-3 text-sm leading-relaxed text-neutral-600'>
            These parameters are stored in your browser&apos;s local storage to track both your initial and most recent visit for analytics purposes. The stored data includes the landing page URL, referrer, and a timestamp. When you submit an inquiry form, these parameters are automatically included with your submission to help us understand which channels drive interest in our projects. The stored UTM data remains in your browser until you clear your browser data.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900'>3. How We Use Your Information</h2>
          <p className='mb-3 text-sm leading-relaxed text-neutral-600'>
            We use the collected information to respond to your inquiries, contact you regarding our properties, analyze marketing effectiveness, and improve our website.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900'>4. Google Analytics &amp; Third-Party Analytics</h2>
          <p className='mb-3 text-sm leading-relaxed text-neutral-600'>
            Our website uses Google Analytics and Google Tag Manager to collect usage data and track visitor interactions for analytics purposes.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900'>5. Data Sharing</h2>
          <p className='mb-3 text-sm leading-relaxed text-neutral-600'>
            We do not sell or rent your personal information to third parties. We may share inquiry details with our team to respond to your request.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900'>6. Data Retention</h2>
          <p className='mb-3 text-sm leading-relaxed text-neutral-600'>
            Your personal information is retained as long as necessary to respond to your inquiry. UTM tracking data stored in your browser persists until you clear your browser&apos;s local storage.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900'>7. Your Rights</h2>
          <p className='mb-3 text-sm leading-relaxed text-neutral-600'>
            You may request access to, correction of, or deletion of your personal data by contacting us. You can clear stored UTM data by clearing your browser&apos;s local storage.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900'>8. Contact Us</h2>
          <p className='mb-2 text-sm text-neutral-600'>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className='text-sm text-neutral-600'>Email: info@sreddygroup.com</p>
          <p className='text-sm text-neutral-600'>Phone: +91 7448007500</p>
        </section>
      </div>
    </div>
  );
}
