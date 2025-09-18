
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Artwork } from './gallery-section';

export function ArtworkSlideshow() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'artwork'), orderBy('createdAt', 'desc'), limit(24));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const artworksData: Artwork[] = [];
      querySnapshot.forEach((doc) => {
        artworksData.push({ id: doc.id, ...doc.data() } as Artwork);
      });
      // Duplicate images to create a seamless looping effect if we have images
      if (artworksData.length > 0) {
        setArtworks([...artworksData, ...artworksData, ...artworksData, ...artworksData]);
      } else {
        setArtworks([]);
      }
    });
    return () => unsubscribe();
  }, []);

  if (artworks.length === 0) {
    return null; // Don't render anything if there are no artworks
  }

  const firstRow = artworks.slice(0, 8);
  const secondRow = artworks.slice(8, 16);
  const thirdRow = artworks.slice(16, 24);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col gap-4 py-4">
        <div className="flex items-center gap-4 animate-scroll-left">
            {firstRow.map((artwork, index) => (
                <div key={`r1-${artwork.id}-${index}`} className="relative h-40 w-40 md:h-60 md:w-60 flex-shrink-0">
                    <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 160px, 240px"
                    data-ai-hint={artwork.imageHint}
                    />
                </div>
            ))}
        </div>
        <div className="flex items-center gap-4 animate-scroll-right">
            {secondRow.map((artwork, index) => (
                <div key={`r2-${artwork.id}-${index}`} className="relative h-40 w-40 md:h-60 md:w-60 flex-shrink-0">
                    <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 160px, 240px"
                     data-ai-hint={artwork.imageHint}
                    />
                </div>
            ))}
        </div>
        <div className="flex items-center gap-4 animate-scroll-left">
            {thirdRow.map((artwork, index) => (
                <div key={`r3-${artwork.id}-${index}`} className="relative h-40 w-40 md:h-60 md:w-60 flex-shrink-0">
                    <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 160px, 240px"
                     data-ai-hint={artwork.imageHint}
                    />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
