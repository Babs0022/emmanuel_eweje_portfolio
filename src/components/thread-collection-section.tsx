
'use client';

import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { Artwork } from './gallery-section';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from './ui/badge';

const uniqueThreadArtworks: Artwork[] = [
  {
    id: 'thread-art-1',
    title: 'Verdant dreamer',
    imageUrl: '/art_slideshow/thread1.jpg',
    imageHint: 'abstract thread art',
    medium: 'Thread on canvas',
    size: '48 x 48 inches',
    year: '2019',
  },
  {
    id: 'thread-art-2',
    title: 'Peace',
    imageUrl: '/art_slideshow/thread2.jpg',
    imageHint: 'abstract thread art',
    size: '60 x 48 inches',
    medium: 'Thread on canvas',
    year: '2022',
  },
  {
    id: 'thread-art-3',
    title: 'Untitled',
    imageUrl: '/art_slideshow/thread3.jpg',
    imageHint: 'abstract thread art',
    size: '42 x 24 inches',
    medium: 'Thread on canvas',
  },
];

// Duplicate the unique artworks to fill the carousel
const threadArtworks = Array.from({ length: 6 }, (_, i) => ({
    ...uniqueThreadArtworks[i % uniqueThreadArtworks.length],
    id: `thread-art-dup-${i}`
}));


export default function ThreadCollectionSection() {
  return (
    <section id="thread-collection" className="w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Thread Collection
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A special collection of intricate thread-based artworks. Click on an artwork to see more details.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {threadArtworks.map((artwork) => (
              <CarouselItem key={artwork.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden bg-background/80 group cursor-pointer">
                        <CardContent className="p-0">
                          <div className="aspect-[4/5] relative">
                            <Image
                              src={artwork.imageUrl}
                              alt={artwork.title}
                              fill
                              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                              sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 33vw"
                              data-ai-hint={artwork.imageHint}
                            />
                          </div>
                           <div className="p-4">
                            <CardTitle className="text-lg">{artwork.title}</CardTitle>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-3xl">{artwork.title}</DialogTitle>
                         <DialogDescription className="text-base pt-2">
                            {artwork.medium && <div>{artwork.medium}</div>}
                            {artwork.size && <div>{artwork.size}</div>}
                         </DialogDescription>
                      </DialogHeader>
                      <div className="relative aspect-video mt-4">
                         <Image
                              src={artwork.imageUrl}
                              alt={artwork.title}
                              fill
                              className="object-contain rounded-md"
                              sizes="100vw"
                            />
                      </div>
                      {artwork.year && <Badge variant="outline" className="mt-4 w-fit">{artwork.year}</Badge>}
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
