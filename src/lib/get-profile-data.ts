
import { db } from '@/lib/firebase-admin';

interface ProfileData {
  profilePictureUrl: string | null;
}

export async function getProfileData(): Promise<ProfileData> {
  if (!db) {
    console.warn('Firestore is not initialized, returning default profile data.');
    return { profilePictureUrl: null };
  }

  try {
    const docRef = db.collection('config').doc('profile');
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const data = docSnap.data();
      return {
        profilePictureUrl: data?.profilePictureUrl || null,
      };
    } else {
      return { profilePictureUrl: null };
    }
  } catch (error) {
    console.error('Error fetching profile data from server:', error);
    return { profilePictureUrl: null };
  }
}
