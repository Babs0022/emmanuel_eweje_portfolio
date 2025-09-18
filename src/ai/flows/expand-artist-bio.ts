'use server';

/**
 * @fileOverview An AI agent for expanding an artist's biography.
 *
 * - expandArtistBio - A function that expands the artist's bio.
 * - ExpandArtistBioInput - The input type for the expandArtistBio function.
 * - ExpandArtistBioOutput - The return type for the expandArtistBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExpandArtistBioInputSchema = z.object({
  shortBio: z.string().describe('The artist\'s current short biography.'),
});
export type ExpandArtistBioInput = z.infer<typeof ExpandArtistBioInputSchema>;

const ExpandArtistBioOutputSchema = z.object({
  expandedBio: z.string().describe('The expanded biography of the artist.'),
});
export type ExpandArtistBioOutput = z.infer<typeof ExpandArtistBioOutputSchema>;

export async function expandArtistBio(input: ExpandArtistBioInput): Promise<ExpandArtistBioOutput> {
  return expandArtistBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'expandArtistBioPrompt',
  input: {schema: ExpandArtistBioInputSchema},
  output: {schema: ExpandArtistBioOutputSchema},
  prompt: `You are a professional biographer tasked with expanding short biographies into more engaging and detailed narratives.

  Expand the following biography of the artist, while maintaining a professional and engaging tone:
  {{shortBio}}`,
});

const expandArtistBioFlow = ai.defineFlow(
  {
    name: 'expandArtistBioFlow',
    inputSchema: ExpandArtistBioInputSchema,
    outputSchema: ExpandArtistBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
