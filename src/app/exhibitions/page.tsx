import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Award, Trophy } from 'lucide-react';

const exhibitions = [
  {
    type: 'Exhibition',
    title: 'Echoes of a Fading World',
    venue: 'The Void Gallery, London',
    date: 'October 2024 - November 2024',
    icon: Calendar,
  },
  {
    type: 'Competition',
    title: 'International Art Prize 2024',
    venue: 'Online',
    date: 'Winner, Abstract Category',
    icon: Award,
  },
  {
    type: 'Exhibition',
    title: 'Solo Show: "Chromatic Aberrations"',
    venue: 'Metropolis Modern Art, New York',
    date: 'June 2023',
    icon: Calendar,
  },
  {
    type: 'Competition',
    title: 'National Painters Challenge',
    venue: 'Art Society of America',
    date: 'Finalist, 2022',
    icon: Trophy,
  }
];

export default function ExhibitionsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <section id="exhibitions" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Exhibitions & Competitions
              </h1>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A timeline of past and upcoming showcases of Emmanuel Eweje&apos;s work.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              {exhibitions.map((item, index) => (
                <Card key={index} className="bg-background/50 animate-in fade-in duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription className="mt-1">{item.venue}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground ml-[68px]">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
