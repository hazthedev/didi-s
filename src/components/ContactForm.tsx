import { useState } from 'react';

interface ContactFormProps {
  formspreeId: string;
}

export default function ContactForm({ formspreeId }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-espresso mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-cream border border-espresso/10 text-espresso placeholder-mocha/50 focus:outline-none focus:border-sienna transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-espresso mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-cream border border-espresso/10 text-espresso placeholder-mocha/50 focus:outline-none focus:border-sienna transition-colors"
            placeholder="01X-XXX XXXX"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-espresso mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-cream border border-espresso/10 text-espresso placeholder-mocha/50 focus:outline-none focus:border-sienna transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-espresso mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-cream border border-espresso/10 text-espresso placeholder-mocha/50 focus:outline-none focus:border-sienna transition-colors resize-y"
          placeholder="Tell us what you need — orders, reservations, questions..."
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-espresso mb-1">
          Event / Reservation Date <span className="text-mocha/50 font-normal">(optional)</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-4 py-3 bg-cream border border-espresso/10 text-espresso placeholder-mocha/50 focus:outline-none focus:border-sienna transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium bg-sienna text-cream hover:bg-espresso transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-pistachio font-medium">Thank you — we'll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-sienna font-medium">Something went wrong. Please try again or WhatsApp us directly.</p>
      )}
    </form>
  );
}
