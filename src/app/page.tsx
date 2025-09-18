import SiteHeader from '@/components/site-header';
import HeroSection from '@/components/hero-section';
import GallerySection from '@/components/gallery-section';
import ContactSection from '@/components/contact-section';
import SiteFooter from '@/components/site-footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
