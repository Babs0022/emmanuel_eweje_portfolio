
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Paintbrush, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import { useProfile } from '@/hooks/use-profile';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/exhibitions', label: 'Exhibitions' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOutUser } = useAuth();
  const { profilePictureUrl } = useProfile();

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {profilePictureUrl ? (
                <Image src={profilePictureUrl} alt="Emmanuel Eweje" width={24} height={24} className="rounded-full" />
            ) : (
                <Paintbrush className="h-6 w-6" />
            )}
            <span className="font-bold font-headline sm:inline-block">
              Emmanuel Eweje
            </span>
          </Link>
        </div>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {user && (
            <Button variant="ghost" size="sm" onClick={signOutUser}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          )}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 pt-8">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={handleLinkClick}
                      className={cn(
                        "text-lg font-medium hover:text-foreground",
                        pathname === href ? "text-foreground" : "text-foreground/80"
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
