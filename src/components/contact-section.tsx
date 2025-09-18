
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import CalendlyWidget from './calendly-widget';
import Link from 'next/link';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M21.182 7.522c-.02-3.14-2.58-5.69-5.74-5.69-2.92 0-5.32 2.14-5.66 4.93h-.02c-.34-2.79-2.74-4.93-5.66-4.93-3.16 0-5.72 2.55-5.74 5.69v.04c.02.1.04.2.06.3v.02c.32 2.78 2.73 4.92 5.64 4.92 3.16 0 5.72-2.56 5.74-5.71v-.04c-.02-.1-.04-.2-.06-.3v-.02c-.32-2.78-2.73-4.92-5.64-4.92-2.91 0-5.31 2.14-5.66 4.93h2.3c.32-1.46 1.63-2.6 3.2-2.6 1.76 0 3.2 1.44 3.2 3.2s-1.44 3.2-3.2 3.2c-1.57 0-2.88-1.14-3.2-2.6H2.4c.31 2.92 2.84 5.2 5.86 5.2 2.76 0 5.06-1.93 5.66-4.46v7.32c0 1.04.84 1.88 1.88 1.88s1.88-.84 1.88-1.88V7.58c.6 2.53 2.9 4.46 5.66 4.46 3.02 0 5.55-2.28 5.86-5.2h-2.3c-.32 1.46-1.63 2.6-3.2 2.6-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2c1.57 0 2.88 1.14 3.2 2.6h2.28c-.02-2.88-2.43-5.18-5.34-5.18z"/>
    </svg>
)

export default function ContactSection() {
  const email = 'Ewejeemmanuel90@gmail.com';
  const phone = '+2348067701117';

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid gap-16">
            <Card>
            <CardHeader>
                <CardTitle className="text-3xl">Contact Information</CardTitle>
                <CardDescription>
                For inquiries, commissions, or just to say hello.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
                <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                    </div>
                    <div>
                    <p className="font-semibold text-lg group-hover:underline">Email</p>
                    <p className="text-muted-foreground">{email}</p>
                    </div>
                </a>
                <a href={`tel:${phone}`} className="flex items-center gap-4 group">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                    </div>
                    <div>
                    <p className="font-semibold text-lg group-hover:underline">Phone</p>
                    <p className="text-muted-foreground">{phone}</p>
                    </div>
                </a>
                <Link href="https://www.instagram.com/emmanuel_eweje_artspace" target="_blank" className="flex items-center gap-4 group">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Instagram className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-semibold text-lg group-hover:underline">Instagram</p>
                        <p className="text-muted-foreground">@emmanuel_eweje_artspace</p>
                    </div>
                </Link>
                <Link href="https://www.tiktok.com/@eweje_emmanuel_studio" target="_blank" className="flex items-center gap-4 group">
                     <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <TiktokIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-semibold text-lg group-hover:underline">TikTok</p>
                        <p className="text-muted-foreground">@eweje_emmanuel_studio</p>
                    </div>
                </Link>
                <Link href="https://www.facebook.com/emmanuel.eweje.2025?mibextid=wwXIfr" target="_blank" className="flex items-center gap-4 group">
                     <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Facebook className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-semibold text-lg group-hover:underline">Facebook</p>
                        <p className="text-muted-foreground">@emmanueleweje</p>
                    </div>
                </Link>
            </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">Schedule a Meeting</CardTitle>
                    <CardDescription>
                        Book a 30-minute meeting directly on the calendar below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <CalendlyWidget url="https://calendly.com/ewejeemmanuel90/30min" />
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
