import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  title: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = data.placeholderImages;
