
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const email = 'Ewejeemmanuel90@gmail.com';
  const phone = '+2348067701117';

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Get in Touch</CardTitle>
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
      </div>
    </section>
  );
}
