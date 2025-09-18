
import type { Artwork } from '@/components/gallery-section';
import data from './placeholder-images.json';

// This file is kept for structure, but placeholder images are no longer used
// in the main parts of the application. The artwork slideshow now fetches
// from Firestore directly.
export const placeholderImages: Artwork[] = data.placeholderImages;
