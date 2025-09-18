import ContactSection from '@/components/contact-section';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

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
