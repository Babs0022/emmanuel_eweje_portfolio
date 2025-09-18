
'use server';

import { z } from 'zod';
import { expandArtistBio as expandArtistBioFlow, ExpandArtistBioInput } from '@/ai/flows/expand-artist-bio';

export async function expandArtistBioAction(input: ExpandArtistBioInput) {
  try {
    const result = await expandArtistBioFlow(input);
    return result;
  } catch (error) {
    console.error("Error expanding bio:", error);
    return { error: 'Failed to expand biography. Please try again later.' };
  }
}
