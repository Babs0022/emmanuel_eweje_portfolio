
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const CalendlyWidget = dynamic(() => import('./calendly-widget'), {
    ssr: false,
    loading: () => <div className="h-[700px] w-full animate-pulse rounded-md bg-muted" />
});

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}>
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
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
                    <CalendlyWidget url="https://calendly.com/ewejeemmanuelartspace/new-meeting" />
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
