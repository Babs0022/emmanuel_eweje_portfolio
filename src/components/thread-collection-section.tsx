
'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Artwork } from './gallery-section';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from './ui/badge';


const threadArtworks: Artwork[] = [
  {
    id: 'thread-art-1',
    title: 'Bold III',
    imageUrl: '/art_slideshow/thread1.jpg',
    imageHint: 'abstract thread art',
    size: '24 x 24 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
  {
    id: 'thread-art-2',
    title: 'Facing the music',
    imageUrl: '/art_slideshow/thread2.jpg',
    imageHint: 'abstract thread art',
    size: '24 x 24 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
  {
    id: 'thread-art-3',
    title: 'Ghost in a city I',
    imageUrl: '/art_slideshow/thread3.jpg',
    imageHint: 'abstract thread art',
    size: '36 x 36 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
  {
    id: 'thread-art-4',
    title: 'Ghost in a city II',
    imageUrl: '/art_slideshow/thread1.jpg',
    imageHint: 'abstract thread art',
    size: '30 x 30 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
  {
    id: 'thread-art-5',
    title: 'Thread Collection 5',
    imageUrl: '/art_slideshow/thread2.jpg',
    imageHint: 'abstract thread art',
  },
  {
    id: 'thread-art-6',
    title: 'Untitled',
    imageUrl: '/art_slideshow/thread3.jpg',
    imageHint: 'abstract thread art',
    medium: 'Thread on canvas',
    size: '42 x 24 inches',
  },
];

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
