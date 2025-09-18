
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  imageHint: string;
}

export default function GallerySection() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'artwork'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const artworksData: Artwork[] = [];
      querySnapshot.forEach((doc) => {
        artworksData.push({ id: doc.id, ...doc.data() } as Artwork);
      });
      setArtworks(artworksData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section id="gallery" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Artwork Gallery
            </h2>
            <p className="max-w-[900px] text-card-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A curated selection of Emmanuel Eweje&apos;s recent works.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loading ? (
             Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="overflow-hidden bg-background/50">
                    <CardContent className="p-0">
                        <div className="aspect-[4/5] relative">
                            <Skeleton className="h-full w-full" />
                        </div>
                        <div className="p-4">
                           <Skeleton className="h-6 w-3/4" />
                        </div>
                    </CardContent>
                </Card>
             ))
          ) : artworks.length === 0 ? (
            <p className="col-span-full text-center text-card-foreground/80">
              No artworks have been added yet. The artist can add them from the admin page.
            </p>
          ) : (
            artworks.map((artwork, index) => (
              <Card
                key={artwork.id}
                className="overflow-hidden bg-background/50 animate-in fade-in duration-500"
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
