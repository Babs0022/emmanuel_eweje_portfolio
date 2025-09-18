import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Award, Trophy, Star, Medal, Heart } from 'lucide-react';

const exhibitions = [
  {
    type: 'Exhibition',
    title: 'Araism Art Exhibition',
    venue: 'Lagos, Nigeria',
    date: '2016',
    icon: Calendar,
  },
  {
    type: 'Competition & Exhibition',
    title: 'Spanish Embassy Art Competition and Exhibition',
    venue: 'Abuja, Nigeria',
    date: '2014 & 2015',
    icon: Trophy,
  },
];

const awards = [
    { title: 'Textile Category Prize Winner', event: 'Life In My City Art Festival', year: '2025', icon: Star },
    { title: 'Grand Prize Winner', event: 'Felabration Art Competition', year: '2024', icon: Star },
    { title: 'Grand Prize Winner', event: 'Felabration Art Competition', year: '2023', icon: Star },
    { title: 'Grand Prize Winner', event: 'Felabration Art Competition', year: '2021', icon: Star },
    { title: 'Third Place Winner', event: 'Spanish Embassy Art Competition', year: '2021', icon: Medal },
    { title: 'Certificate of Participation', event: 'Arts in Medicine Fellowship Program', year: '2019', icon: Award },
    { title: 'Award of Excellence', event: 'Outstanding Arts in Medicine Fellow', year: '2019', icon: Heart },
    { title: 'Award for Outstanding Contribution', event: 'International Exchange Mural project with Sara Hinds', year: '', icon: Award },
    { title: '2nd Runner up', event: 'Ramati Art Africa Competition', year: '2018', icon: Medal },
    { title: 'Art Ambassador', event: 'Leap Africa, Nigeria', year: '2017', icon: Award },
    { title: 'Winner (Art category)', event: 'Akili Dada Lead Contest, Kenya', year: '2017', icon: Trophy },
    { title: 'Winner', event: 'Leap Africa Art Competition', year: '2017', icon: Trophy },
    { title: 'Zonal Category Winner', event: 'National Visual Art Competition', year: '2014', icon: Star },
    { title: 'Still Life Category Winner', event: 'Demian Art Competition', year: '2013', icon: Star },
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
                Showcases & Accolades
              </h1>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A timeline of past and upcoming showcases of Emmanuel Eweje&apos;s work.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid gap-16">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8 text-center">Exhibitions & Competitions</h2>
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

                <div>
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8 text-center">Awards & Recognitions</h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {awards.map((item, index) => (
                            <Card key={index} className="bg-background/50 animate-in fade-in duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                <div className="bg-primary/10 text-primary p-3 rounded-full">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription className="mt-1">{item.event}</CardDescription>
                                </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground ml-[68px]">{item.year}</p>
                            </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
