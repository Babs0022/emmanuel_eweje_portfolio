
import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M21.182 7.522c-.02-3.14-2.58-5.69-5.74-5.69-2.92 0-5.32 2.14-5.66 4.93h-.02c-.34-2.79-2.74-4.93-5.66-4.93-3.16 0-5.72 2.55-5.74 5.69v.04c.02.1.04.2.06.3v.02c.32 2.78 2.73 4.92 5.64 4.92 3.16 0 5.72-2.56 5.74-5.71v-.04c-.02-.1-.04-.2-.06-.3v-.02c-.32-2.78-2.73-4.92-5.64-4.92-2.91 0-5.31 2.14-5.66 4.93h2.3c.32-1.46 1.63-2.6 3.2-2.6 1.76 0 3.2 1.44 3.2 3.2s-1.44 3.2-3.2 3.2c-1.57 0-2.88-1.14-3.2-2.6H2.4c.31 2.92 2.84 5.2 5.86 5.2 2.76 0 5.06-1.93 5.66-4.46v7.32c0 1.04.84 1.88 1.88 1.88s1.88-.84 1.88-1.88V7.58c.6 2.53 2.9 4.46 5.66 4.46 3.02 0 5.55-2.28 5.86-5.2h-2.3c-.32 1.46-1.63 2.6-3.2 2.6-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2c1.57 0 2.88 1.14 3.2 2.6h2.28c-.02-2.88-2.43-5.18-5.34-5.18z"/>
    </svg>
)

export default function SiteFooter() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-card-foreground/60 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Emmanuel Eweje. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.instagram.com/emmanuel_eweje_artspace" target="_blank" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.tiktok.com/@eweje_emmanuel_studio" target="_blank" aria-label="TikTok">
              <TiktokIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.facebook.com/emmanuel.eweje.2025?mibextid=wwXIfr" target="_blank" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
