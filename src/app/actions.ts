
'use server';

import { z } from 'zod';
import { expandArtistBio as expandArtistBioFlow, ExpandArtistBioInput } from '@/ai/flows/expand-artist-bio';
import { db, storage } from '@/lib/firebase-admin';
import { revalidatePath } from 'next/cache';

export async function expandArtistBioAction(input: ExpandArtistBioInput) {
  try {
    const result = await expandArtistBioFlow(input);
    return result;
  } catch (error) {
    console.error("Error expanding bio:", error);
    return { error: 'Failed to expand biography. Please try again later.' };
  }
}

async function uploadFile(file: File, path: string): Promise<string> {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const bucket = storage.bucket();
    const fileRef = bucket.file(path);

    await fileRef.save(fileBuffer, {
        metadata: {
            contentType: file.type,
        },
    });

    // Make the file public and get the URL
    await fileRef.makePublic();
    return fileRef.publicUrl();
}

export async function uploadArtwork(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const image = formData.get('image') as File;
    
    if (!title || !image) {
        throw new Error('Title and image are required.');
    }
    
    const imagePath = `artwork/${Date.now()}_${image.name}`;
    const imageUrl = await uploadFile(image, imagePath);
    
    // For simplicity, we'll generate a basic image hint from the title
    const imageHint = title.toLowerCase().split(' ').slice(0, 2).join(' ');

    await db.collection('artwork').add({
        title,
        imageUrl,
        imageHint,
        createdAt: new Date(),
    });

    revalidatePath('/gallery');

    return { success: true };
  } catch (error) {
    console.error("Error uploading artwork:", error);
    return { error: (error as Error).message };
  }
}

export async function uploadProfilePicture(formData: FormData) {
    try {
        const image = formData.get('profile-image') as File;

        if (!image) {
            throw new Error('Image file is required.');
        }

        const imagePath = `config/profile_${Date.now()}_${image.name}`;
        const imageUrl = await uploadFile(image, imagePath);

        await db.collection('config').doc('profile').set({
            profilePictureUrl: imageUrl,
            updatedAt: new Date(),
        }, { merge: true });

        revalidatePath('/');
        
        return { success: true, url: imageUrl };

    } catch (error) {
        console.error("Error uploading profile picture:", error);
        return { error: (error as Error).message };
    }
}
