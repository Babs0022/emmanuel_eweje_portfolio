
'use client';

import { useEffect, useState, useActionState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { uploadArtwork, uploadProfilePicture, deleteArtwork } from '../actions';
import { Skeleton } from '@/components/ui/skeleton';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import type { Artwork } from '@/components/gallery-section';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const staticArtworks: Artwork[] = [
  {
    id: 'static-art-1',
    title: 'Bold III',
    imageUrl: '/art_slideshow/art1.jpg',
    imageHint: 'abstract art',
    size: '24 x 24 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
  {
    id: 'static-art-2',
    title: 'Facing the music',
    imageUrl: '/art_slideshow/art2.jpg',
    imageHint: 'abstract art',
    size: '24 x 24 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
  {
    id: 'static-art-3',
    title: 'Ghost in a city I',
    imageUrl: '/art_slideshow/art3.jpg',
    imageHint: 'abstract art',
    size: '36 x 36 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
  {
    id: 'static-art-4',
    title: 'Ghost in a city II',
    imageUrl: '/art_slideshow/art4.jpg',
    imageHint: 'abstract art',
    size: '30 x 30 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
  {
    id: 'static-art-5',
    title: 'Glimmer of hope',
    imageUrl: '/art_slideshow/art5.jpg',
    imageHint: 'abstract art',
    size: '30 x 30 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
  {
    id: 'static-art-6',
    title: 'Overthinking',
    imageUrl: '/art_slideshow/art6.jpg',
    imageHint: 'abstract art',
    size: '30 x 30 inches',
    medium: 'Acrylic on canvas',
    year: '2025',
  },
];


function ManageArtworks() {
  const [firestoreArtworks, setFirestoreArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const q = query(collection(db, 'artwork'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const artworksData: Artwork[] = [];
      querySnapshot.forEach((doc) => {
        artworksData.push({ id: doc.id, ...doc.data() } as Artwork);
      });
      setFirestoreArtworks(artworksData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (artwork: Artwork) => {
    if (artwork.id.startsWith('static-')) {
      toast({
        variant: "destructive",
        title: "Deletion Failed",
        description: "Static artworks cannot be deleted from the admin panel.",
      });
      return;
    }
    try {
      const result = await deleteArtwork(artwork.id, artwork.imageUrl);
      if (result.error) {
        throw new Error(result.error);
      }
      toast({
        title: "Deletion Successful",
        description: `"${artwork.title}" has been removed from the gallery.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Deletion Failed",
        description: (error as Error).message || "An unknown error occurred.",
      });
    }
  };

  const allArtworks = [...firestoreArtworks, ...staticArtworks];

  if (loading && firestoreArtworks.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-48 w-full" />
        ))}
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Gallery</CardTitle>
        <CardDescription>
          Review and delete artworks from your gallery.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {allArtworks.length === 0 ? (
          <p className="text-muted-foreground text-center">No artworks uploaded yet.</p>
        ) : (
          <div className="space-y-4">
            {allArtworks.map((artwork) => (
              <div key={artwork.id} className="flex items-center justify-between p-2 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Image src={artwork.imageUrl} alt={artwork.title} width={64} height={64} className="rounded-md object-cover aspect-square" />
                  <span className="font-medium">{artwork.title}</span>
                </div>
                 <div className="flex items-center gap-2">
                   {artwork.id.startsWith('static-') && (
                      <Badge variant="secondary">Static</Badge>
                   )}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="icon" disabled={artwork.id.startsWith('static-')}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete Artwork</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the artwork
                            <span className="font-bold">&quot;{artwork.title}&quot;</span> and remove its image from storage.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(artwork)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                 </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}


export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
  const [artworkState, artworkFormAction] = useActionState(uploadArtwork, null);
  const [profileState, profileFormAction] = useActionState(uploadProfilePicture, null);

  useEffect(() => {
    if(artworkState?.success) {
       toast({
          title: 'Upload Successful',
          description: "The new artwork has been added to the gallery.",
        });
    } else if (artworkState?.error) {
       toast({
          variant: 'destructive',
          title: 'Upload Failed',
          description: artworkState.error,
        });
    }
  }, [artworkState, toast]);

  useEffect(() => {
    if(profileState?.success) {
       toast({
          title: 'Update Successful',
          description: "Your profile picture has been updated.",
        });
    } else if (profileState?.error) {
       toast({
          variant: 'destructive',
          title: 'Update Failed',
          description: profileState.error,
        });
    }
  }, [profileState, toast]);


  if (loading || !user) {
    return (
      <div className="flex flex-col min-h-[100dvh]">
        <SiteHeader />
        <main className="flex-1 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto space-y-8">
                    <Card>
                        <CardHeader>
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-4 w-full mt-2" />
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-1/4" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-1/4" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <Skeleton className="h-10 w-32" />
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-4 w-full mt-2" />
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-1/4" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <Skeleton className="h-10 w-32" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            <ManageArtworks />
            <Card>
              <CardHeader>
                <CardTitle>Upload New Artwork</CardTitle>
                <CardDescription>
                  Add a new piece to the gallery. The image will be uploaded and displayed on the gallery page.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={artworkFormAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Artwork Title</Label>
                    <Input id="title" name="title" placeholder="e.g., 'Sunset over Lagos'" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Image File</Label>
                    <Input id="image" name="image" type="file" required accept="image/*" />
                  </div>
                  <Button type="submit">Upload Artwork</Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Update Profile Picture</CardTitle>
                <CardDescription>
                  Replace the profile picture on the main page.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={profileFormAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="profile-image">Profile Picture</Label>
                    <Input id="profile-image" name="profile-image" type="file" required accept="image/*" />
                  </div>
                  <Button type="submit">Update Picture</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

    