
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { AuthProvider } from '@/hooks/use-auth';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-default-url.com';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Emmanuel Eweje - Artist Portfolio',
        template: '%s | Emmanuel Eweje',
    },
    description: "Explore the artwork of Emmanuel Eweje in his online gallery. A contemporary artist specializing in thread painting and acrylics.",
    icons: {
        icon: '/artist-image.jpg',
        shortcut: '/artist-image.jpg',
        apple: '/artist-image.jpg',
    },
    openGraph: {
        title: 'Emmanuel Eweje - Artist Portfolio',
        description: 'Explore the vibrant and intricate artworks of contemporary artist Emmanuel Eweje.',
        url: siteUrl,
        siteName: 'Emmanuel Eweje Portfolio',
        images: [
            {
                url: `${siteUrl}/art_slideshow/artist-at-work.jpg`,
                width: 1200,
                height: 630,
                alt: 'Emmanuel Eweje working in his studio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Emmanuel Eweje - Artist Portfolio',
        description: 'Explore the vibrant and intricate artworks of contemporary artist Emmanuel Eweje.',
        images: [`${siteUrl}/art_slideshow/artist-at-work.jpg`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
