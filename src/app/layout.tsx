
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { AuthProvider } from '@/hooks/use-auth';
import { getProfileData } from '@/lib/get-profile-data';

export async function generateMetadata(): Promise<Metadata> {
  const profileData = await getProfileData();
  const title = 'Emmanuel Eweje - Artist Portfolio';
  const description = "Explore the artwork of Emmanuel Eweje in his online gallery.";
  
  const icons = profileData.profilePictureUrl ? {
    icon: profileData.profilePictureUrl,
    shortcut: profileData.profilePictureUrl,
    apple: profileData.profilePictureUrl,
  } : {};

  return {
    title,
    description,
    icons,
  };
}


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
