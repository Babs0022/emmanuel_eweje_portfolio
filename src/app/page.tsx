
import HeroSection from '@/components/hero-section';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Emmanuel Eweje - Contemporary Artist',
  description: 'Learn about the journey, artistic statement, and creative process of Emmanuel Eweje, a contemporary artist specializing in thread painting and acrylics.',
  openGraph: {
    title: 'About | Emmanuel Eweje - Contemporary Artist',
    description: 'Learn about the journey, artistic statement, and creative process of Emmanuel Eweje.',
  },
  twitter: {
     title: 'About | Emmanuel Eweje - Contemporary Artist',
    description: 'Learn about the journey, artistic statement, and creative process of Emmanuel Eweje.',
  }
};

const artistJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Emmanuel Eweje",
    "url": "https://your-default-url.com",
    "jobTitle": "Contemporary Artist",
    "sameAs": [
        "https://www.instagram.com/emmanuel_eweje_artspace",
        "https://www.tiktok.com/@eweje_emmanuel_studio",
        "https://www.facebook.com/emmanuel.eweje.2025?mibextid=wwXIfr"
    ],
    "image": "https://your-default-url.com/artist-image.jpg",
    "description": "Emmanuel Eweje is a contemporary artist specializing in a wide range of mediums, from drawing to acrylic painting and thread painting. His work explores themes of identity, memory, and cultural heritage."
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artistJsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
      </main>
      <SiteFooter />
    </div>
  );
}
