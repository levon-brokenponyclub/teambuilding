"use client";

import { site } from "@/data/site";
import { Dialog } from "@/components/ui/Dialog";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export function QuoteModal({ open, onClose }: QuoteModalProps) {
  return (
    <Dialog open={open} onClose={onClose} title="Get a quote">
      <div className="space-y-4">
        <p className="text-ink-2 text-sm">
          Tell us a little about your team and we'll come back to you within one working day.
        </p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full rounded-xl border border-line px-4 py-2.5 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full rounded-xl border border-line px-4 py-2.5 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10"
              placeholder="you@company.co.za"
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-navy mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10"
              placeholder="Company name"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
              Tell us about your team
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10"
              placeholder="Group size, preferred dates, activity type..."
            />
          </div>
          <button type="submit" className="btn btn-lime w-full sm:w-auto">
            Send enquiry
          </button>
        </form>
      </div>
    </Dialog>
  );
}
