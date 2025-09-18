
import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}>
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
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
