
'use client';

import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { Artwork } from './gallery-section';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {threadArtworks.map((artwork, index) => (
            <Card
              key={artwork.id}
              className="overflow-hidden bg-background/80 animate-in fade-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={artwork.imageHint}
                  />
                </div>
                <div className="p-4">
                  <CardTitle className="text-xl font-semibold">{artwork.title}</CardTitle>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
