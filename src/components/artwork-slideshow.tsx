
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { placeholderImages } from '@/lib/placeholder-images';

// Duplicate images to create a seamless looping effect
const artworks = [...placeholderImages, ...placeholderImages, ...placeholderImages, ...placeholderImages];

const firstRow = artworks.slice(0, 8);
const secondRow = artworks.slice(8, 16);
const thirdRow = artworks.slice(16, 24);


export function ArtworkSlideshow() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col gap-4 py-4">
        <div className="flex items-center gap-4 animate-scroll-left">
            {firstRow.map((artwork, index) => (
                <div key={`r1-${index}`} className="relative h-40 w-40 md:h-60 md:w-60 flex-shrink-0">
                    <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 160px, 240px"
                    />
                </div>
            ))}
        </div>
        <div className="flex items-center gap-4 animate-scroll-right">
            {secondRow.map((artwork, index) => (
                <div key={`r2-${index}`} className="relative h-40 w-40 md:h-60 md:w-60 flex-shrink-0">
                    <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 160px, 240px"
                    />
                </div>
            ))}
        </div>
        <div className="flex items-center gap-4 animate-scroll-left">
            {thirdRow.map((artwork, index) => (
                <div key={`r3-${index}`} className="relative h-40 w-40 md:h-60 md:w-60 flex-shrink-0">
                    <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 160px, 240px"
                    />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
