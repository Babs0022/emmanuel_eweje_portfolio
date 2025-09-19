
import GallerySection from '@/components/gallery-section';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import ThreadCollectionSection from '@/components/thread-collection-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artwork Gallery | Emmanuel Eweje',
  description: "Explore a curated selection of Emmanuel Eweje's recent works, including his intricate thread collection and vibrant acrylic paintings.",
  openGraph: {
    title: 'Artwork Gallery | Emmanuel Eweje',
    description: 'A curated selection of recent works and thread-based artworks.',
  },
   twitter: {
    title: 'Artwork Gallery | Emmanuel Eweje',
    description: 'A curated selection of recent works and thread-based artworks.',
  }
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <GallerySection />
        <ThreadCollectionSection />
      </main>
      <SiteFooter />
    </div>
  );
}
