
import ContactSection from '@/components/contact-section';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Emmanuel Eweje',
  description: 'Get in touch with Emmanuel Eweje for inquiries, commissions, or to schedule a meeting. Contact information and booking calendar available.',
  openGraph: {
    title: 'Contact | Emmanuel Eweje',
    description: 'Get in touch for inquiries, commissions, or to schedule a meeting.',
  },
   twitter: {
    title: 'Contact | Emmanuel Eweje',
    description: 'Get in touch for inquiries, commissions, or to schedule a meeting.',
  }
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
