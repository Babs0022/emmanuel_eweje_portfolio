
import * as admin from 'firebase-admin';

// Ensure environment variables are loaded
// In Next.js, this is typically handled by the framework, but for standalone scripts or other environments,
// you might need something like `require('dotenv').config({ path: '.env.local' });`

const requiredEnvVars = [
    'FIREBASE_PROJECT_ID',
    'FIREBASE_CLIENT_EMAIL',
    'FIREBASE_PRIVATE_KEY',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

let db: admin.firestore.Firestore | undefined;
let storage: admin.storage.Storage | undefined;

if (missingEnvVars.length > 0) {
    console.warn(`Firebase admin initialization skipped. Missing environment variables: ${missingEnvVars.join(', ')}`);
} else if (admin.apps.length === 0) {
    try {
        const privateKey = (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: privateKey,
            }),
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        });
        
        db = admin.firestore();
        storage = admin.storage();

    } catch (error) {
        console.error('Firebase admin initialization error:', error);
    }
} else {
    // If the app is already initialized, just get the instances
    db = admin.firestore();
    storage = admin.storage();
}

export { db, storage };
