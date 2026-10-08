import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, Mail, Copy, Check } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { InquiryFormData } from '../types';
import { useModalA11y } from '../hooks/useModalA11y';

interface ContactModalProps {
  isOpen: boolean;
  defaultInitiative?: string;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  defaultInitiative = 'General Ecosystem Inquiry',
  onClose,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    organization: '',
    initiativeInterest: defaultInitiative,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useModalA11y({
    isOpen,
    onClose,
    dialogRef,
  });

  useEffect(() => {
    if (defaultInitiative) {
      setFormData((prev) => ({ ...prev, initiativeInterest: defaultInitiative }));
    }
  }, [defaultInitiative]);

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Inquiry] ${formData.initiativeInterest} — ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nOrganization: ${formData.organization || 'Not specified'}\nInitiative: ${formData.initiativeInterest}\n\nBrief Outline:\n${formData.message}\n\n---\nSent via Crystal Kizor Studio Portal`
    );
    return `mailto:contact@crystalkizor.com?subject=${subject}&body=${body}`;
  };

  const getFormattedMessageText = () => {
    return `To: contact@crystalkizor.com\nSubject: [Inquiry] ${formData.initiativeInterest} — ${formData.fullName}\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nOrganization: ${formData.organization || 'Not specified'}\nInitiative: ${formData.initiativeInterest}\n\nBrief Outline:\n${formData.message}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setErrorMessage('');
    
    // Trigger user's mail client with pre-filled parameters
    const mailto = getMailtoLink();
    window.location.href = mailto;

    trackEvent('inquiry_submitted', {
      initiative: formData.initiativeInterest,
      hasOrg: Boolean(formData.organization),
    });

    setSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFormattedMessageText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCopied(false);
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      initiativeInterest: 'General Ecosystem Inquiry',
      message: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F8F7F4] border border-[#1C1917]/20 shadow-2xl p-6 sm:p-10 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#E7E5E4] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1C1917]"
          aria-label="Close dialogue dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 space-y-6" aria-live="polite">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1C1917] text-[#F8F7F4] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#9A3412]" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C1917]">
                  Inquiry Brief Formatted
                </h3>
                <p className="text-xs text-[#78716C] uppercase tracking-wider">
                  Direct Dispatch to Studio Coordination
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#F0ECE4] border border-[#1C1917]/15 text-xs text-[#57534E] leading-relaxed">
              <p className="font-medium text-[#1C1917] mb-1">
                Transparency note (Assessment Environment):
              </p>
              This static client interface does not store submissions on an external database. Your message was formatted for your default email client. If your client did not launch automatically, use the buttons below.
            </div>

            {/* Formatted Preview Box */}
            <div className="p-4 bg-white border border-[#1C1917]/15 font-mono text-xs text-[#292524] space-y-1 overflow-x-auto whitespace-pre-wrap">
              {getFormattedMessageText()}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getMailtoLink()}
                className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email Client</span>
              </a>

              <button
                onClick={handleCopy}
                className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#1C1917] bg-[#E7E5E4] hover:bg-[#D6D3CD] transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Message'}</span>
              </button>

              <button
                onClick={handleReset}
                className="px-4 py-3 text-xs font-medium text-[#78716C] hover:text-[#1C1917] transition-colors ml-auto cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="pr-10 mb-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#9A3412] block mb-2">
                Direct Dialogue
              </span>
              <h3 id="contact-modal-title" className="font-editorial text-3xl sm:text-4xl text-[#1C1917]">
                Start a Conversation.
              </h3>
              <p className="text-sm text-[#57534E] mt-2">
                Whether you are exploring an architectural commission, furniture collection inquiries,
                a lecture or keynote invitation, or an educational partnership.
              </p>

              {/* Direct Studio Email Badge */}
              <div className="mt-4 pt-3 hairline-t flex flex-wrap items-center gap-4 text-xs text-[#78716C]">
                <span>Direct Studio Email:</span>
                <a
                  href="mailto:contact@crystalkizor.com"
                  className="font-medium text-[#1C1917] hover:text-[#9A3412] underline underline-offset-2"
                >
                  contact@crystalkizor.com
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="mailto:studio@studiocoka.com"
                  className="font-medium text-[#1C1917] hover:text-[#9A3412] underline underline-offset-2"
                >
                  studio@studiocoka.com
                </a>
              </div>
            </div>

            {errorMessage && (
              <div role="alert" className="mb-6 p-3 bg-red-50 border border-red-200 text-red-800 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold tracking-wider uppercase text-[#78716C] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#1C1917]/20 text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    placeholder="e.g. Chinua Okafor"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-[#78716C] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#1C1917]/20 text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    placeholder="name@organization.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="organization" className="block text-xs font-semibold tracking-wider uppercase text-[#78716C] mb-1.5">
                    Organization / Studio (Optional)
                  </label>
                  <input
                    id="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#1C1917]/20 text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    placeholder="Studio, University or Firm"
                  />
                </div>

                <div>
                  <label htmlFor="initiativeInterest" className="block text-xs font-semibold tracking-wider uppercase text-[#78716C] mb-1.5">
                    Initiative of Interest *
                  </label>
                  <select
                    id="initiativeInterest"
                    value={formData.initiativeInterest}
                    onChange={(e) => setFormData({ ...formData, initiativeInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#1C1917]/20 text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                  >
                    <option value="Studio COKA (Architecture & Construction)">Studio COKA (Architecture & Construction)</option>
                    <option value="ELEvated (Furniture & Products)">ELEvated (Furniture & Products)</option>
                    <option value="AKO Alliance (Education & Opportunity)">AKO Alliance (Education & Opportunity)</option>
                    <option value="Alive and Free (Youth Movement)">Alive and Free (Youth Movement)</option>
                    <option value="The Effective Architect (TEA)">The Effective Architect (TEA)</option>
                    <option value="Speaking & Keynotes">Speaking & Keynotes</option>
                    <option value="Research & Writing">Research & Writing</option>
                    <option value="General Ecosystem Inquiry">General Ecosystem Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold tracking-wider uppercase text-[#78716C] mb-1.5">
                  Message / Brief Outline *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#1C1917]/20 text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                  placeholder="Share details regarding your space, timeline, event, or collaboration concept..."
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-colors cursor-pointer inline-flex items-center gap-2 self-start"
                >
                  <span>Format & Dispatch Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-[#78716C] italic">
                  Opens default email client with formatted message
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
