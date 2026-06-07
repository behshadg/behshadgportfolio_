import { useState } from 'react';
import { FiArrowUpRight, FiCopy, FiMail } from 'react-icons/fi';

function Contact({ contact }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section-shell mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="contact-panel">
        <div className="max-w-2xl">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Let&apos;s build something thoughtful.
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-200">
            {contact.intro}
          </p>
          <p className="mt-4 text-base leading-7 text-stone-300">
            {contact.availability}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_auto]">
          <a href={contact.links[0].href} className="button-primary">
            <FiMail />
            {contact.email}
          </a>
          <button type="button" className="button-secondary" onClick={copyEmail}>
            <FiCopy />
            {copied ? 'Copied' : 'Copy Email'}
          </button>
          <a
            href={contact.links[1].href}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            {contact.links[1].label}
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
