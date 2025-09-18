
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ArtworkSlideshow } from './artwork-slideshow';

export default function HeroSection() {
  
  const shortBio = "My name is Emmanuel Eweje, and I offer a unique perspective in the realm of contemporary art, driven by a deep passion for creative diversity and a keen eye for design. Over the years, my journey as an artist has been marked by significant achievements, including winning the Next Rated Star award in the Art category and receiving recognition from esteemed competitions like the National Visual Art Competition and the Leap Africa Art Competition. These accomplishments stand as testaments to my dedication and talent in the field. My artistic practice encompasses a wide range of mediums, from drawing to acrylic painting and thread painting . I approach each piece with meticulous attention to detail and a profound understanding of cultural symbolism, aiming to foster dialogue and embrace diversity through my art. Beyond creating art, I have utilized my talents to make a positive impact in my community. As an Arts in Medicine Fellow and art teacher, I have witnessed firsthand the transformative power of art in healing and education. Additionally, my work as a muralist with the House of Bezalel Mural and Graffiti Artist Collective has allowed me to contribute to vibrant urban landscapes and ignite meaningful conversations through bold and dynamic murals. My artworks have been showcased in various exhibitions and competitions, both locally and internationally, including the Connect residency/exhibition in Chicago and the Spanish Embassy Art Competition. These experiences have reinforced my commitment to pushing boundaries and challenging conventional artistic norms. With a diverse skill set that encompasses technical abilities, interpersonal skills, and critical thinking, I continue to explore new avenues in my artistic practice. Through my work, I strive to foster connections, provoke thought, and inspire dialogue, inviting viewers to engage with complex themes of identity, memory, and cultural heritage";

  return (
    <section id="about" className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <ArtworkSlideshow />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
              Emmanuel Eweje - A Contemporary Artist
            </h1>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              {shortBio}
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/gallery">
                Explore more of my Artworks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
      </div>
    </section>
  );
}
