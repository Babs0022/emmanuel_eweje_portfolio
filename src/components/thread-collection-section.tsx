
'use client';

import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { Artwork } from './gallery-section';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const threadArtworks: Artwork[] = Array.from({ length: 6 }, (_, i) => ({
  id: `thread-art-${i + 1}`,
  title: `Thread Collection ${i + 1}`,
  imageUrl: `/art_slideshow/art${i + 1}.jpg`,
  imageHint: 'abstract thread art',
}));

export default function ThreadCollectionSection() {
  return (
    <section id="thread-collection" className="w-full py-16 md:py-24 lg:py-32">
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {threadArtworks.map((artwork, index) => (
              <CarouselItem key={artwork.id} className="md:basis-1/2 lg:basis-1/3">
                 <div className="p-1">
                    <Card
                      className="overflow-hidden bg-background/80"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-[4/5] relative">
                          <Image
                            src={artwork.imageUrl}
                            alt={artwork.title}
                            fill
                            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                            sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 33vw"
                            data-ai-hint={artwork.imageHint}
                          />
                        </div>
                        <div className="p-4">
                          <CardTitle className="text-xl font-semibold">{artwork.title}</CardTitle>
                        </div>
                      </CardContent>
                    </Card>
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
