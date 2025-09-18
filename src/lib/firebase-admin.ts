
import * as admin from 'firebase-admin';

const requiredEnvVars = [
    'FIREBASE_PROJECT_ID',
    'FIREBASE_CLIENT_EMAIL',
    'FIREBASE_PRIVATE_KEY',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    console.warn(`Firebase admin initialization skipped. Missing environment variables: ${missingEnvVars.join(', ')}`);
} else if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            }),
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        });
    } catch (error) {
        console.error('Firebase admin initialization error:', error);
    }
}


// These will be undefined if initialization fails, which is expected.
// The app will then throw an error when trying to use db or storage.
export const db = admin.apps.length ? admin.firestore() : undefined;
export const storage = admin.apps.length ? admin.storage() : undefined;
