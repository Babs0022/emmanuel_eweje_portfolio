
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Artwork } from './gallery-section';

const staticArtworks: Artwork[] = Array.from({ length: 8 }, (_, i) => ({
  id: `art-${i + 1}`,
  title: `Artwork ${i + 1}`,
  imageUrl: `/art_slideshow/art${i + 1}.jpg`,
  imageHint: 'abstract art',
}));


export function ArtworkSlideshow() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    // Duplicate images to create a seamless looping effect if we have images
    if (staticArtworks.length > 0) {
        // We need enough images to fill the screen and loop, 24 gives us 3 rows of 8
        const duplicatedArtworks = [];
        for (let i = 0; i < 24; i++) {
            duplicatedArtworks.push(staticArtworks[i % staticArtworks.length]);
        }
       setArtworks(duplicatedArtworks);
    }
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
