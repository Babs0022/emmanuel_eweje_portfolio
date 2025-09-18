
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

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function submitContactFormAction(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Send Message.',
    }
  }

  try {
    // In a real application, you would integrate an email service here.
    // e.g., await sendEmail(validatedFields.data);
    console.log('New contact form submission:', validatedFields.data);
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { message: 'An unexpected error occurred. Please try again.' };
  }
}
