
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function SiteFooter() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-card-foreground/60 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Emmanuel Eweje. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
