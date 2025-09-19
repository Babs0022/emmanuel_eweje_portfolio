
'use client';

import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface ProfileData {
  profilePictureUrl: string | null;
}

export const useProfile = () => {
  const [profile, setProfile] = useState<ProfileData>({ profilePictureUrl: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, 'config', 'profile');
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfile({ profilePictureUrl: data.profilePictureUrl || null });
      } else {
        setProfile({ profilePictureUrl: null });
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching profile data:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { ...profile, loading };
};
