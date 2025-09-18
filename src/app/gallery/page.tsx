import GallerySection from '@/components/gallery-section';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <GallerySection />
      </main>
      <SiteFooter />
    </div>
  );
}
