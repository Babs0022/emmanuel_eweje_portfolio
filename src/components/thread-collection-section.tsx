
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Artwork } from './gallery-section';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

const threadArtworks: Artwork[] = Array.from({ length: 6 }, (_, i) => ({
  id: `thread-art-${i + 1}`,
  title: `Thread Collection ${i + 1}`,
  imageUrl: `/art_slideshow/art${i + 1}.jpg`,
  imageHint: 'abstract thread art',
}));

export default function ThreadCollectionSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  return (
    <section id="thread-collection" className="w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Thread Collection
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A special collection of intricate thread-based artworks.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {threadArtworks.map((artwork, index) => (
                <div key={artwork.id} className="flex-[0_0_80%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                  <Card className="overflow-hidden bg-background/80 group">
                    <CardContent className="p-0">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src={artwork.imageUrl}
                          alt={artwork.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          sizes="(max-width: 768px) 80vw, (max-w: 1280px) 40vw, 33vw"
                          data-ai-hint={artwork.imageHint}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
           <CarouselPrevious onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
           <CarouselNext onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </div>
      </div>
    </section>
  );
}
