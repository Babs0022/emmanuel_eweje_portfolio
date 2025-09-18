
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail } from 'lucide-react';
import CalendlyWidget from './calendly-widget';

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
