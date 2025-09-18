
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Loader2, Sparkles } from 'lucide-react';
import { expandArtistBioAction } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export default function HeroSection() {
  const [expandedBio, setExpandedBio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const shortBio = "My name is Emmanuel Eweje, and I offer a unique perspective in the realm of contemporary art, driven by a deep passion for creative diversity and a keen eye for design. Over the years, my journey as an artist has been marked by significant achievements, including winning the Next Rated Star award in the Art category and receiving recognition from esteemed competitions like the National Visual Art Competition and the Leap Africa Art Competition. These accomplishments stand as testaments to my dedication and talent in the field. My artistic practice encompasses a wide range of mediums, from drawing to acrylic painting and thread painting . I approach each piece with meticulous attention to detail and a profound understanding of cultural symbolism, aiming to foster dialogue and embrace diversity through my art. Beyond creating art, I have utilized my talents to make a positive impact in my community. As an Arts in Medicine Fellow and art teacher, I have witnessed firsthand the transformative power of art in healing and education. Additionally, my work as a muralist with the House of Bezalel Mural and Graffiti Artist Collective has allowed me to contribute to vibrant urban landscapes and ignite meaningful conversations through bold and dynamic murals. My artworks have been showcased in various exhibitions and competitions, both locally and internationally, including the Connect residency/exhibition in Chicago and the Spanish Embassy Art Competition. These experiences have reinforced my commitment to pushing boundaries and challenging conventional artistic norms. With a diverse skill set that encompasses technical abilities, interpersonal skills, and critical thinking, I continue to explore new avenues in my artistic practice. Through my work, I strive to foster connections, provoke thought, and inspire dialogue, inviting viewers to engage with complex themes of identity, memory, and cultural heritage";

  const handleExpandBio = async () => {
    setIsLoading(true);
    setError('');
    setIsDialogOpen(true);
    const result = await expandArtistBioAction({ shortBio });

    if (result.error) {
      setError(result.error);
      setExpandedBio('');
    } else if (result.expandedBio) {
      setExpandedBio(result.expandedBio);
    }
    setIsLoading(false);
  };

  return (
    <section id="about" className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
            Emmanuel Eweje - A Contemporary Artist
          </h1>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            {shortBio}
          </p>
          <Button onClick={handleExpandBio} className="mt-8" size="lg" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Expand Bio with AI
          </Button>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
           <Image
              src="https://picsum.photos/seed/profile/600/600"
              alt="Emmanuel Eweje profile picture"
              width={400}
              height={400}
              className="rounded-3xl aspect-square object-cover"
              data-ai-hint="artist portrait"
            />
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Artist Biography</DialogTitle>
          </DialogHeader>
          {isLoading && (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {expandedBio && (
            <DialogDescription className="text-base text-foreground/80 leading-relaxed prose prose-p:text-foreground/80">
              {expandedBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </DialogDescription>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
