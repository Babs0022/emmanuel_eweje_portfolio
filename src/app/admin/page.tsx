
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { uploadArtwork, uploadProfilePicture } from '../actions';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

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

  const handleArtworkUpload = async (formData: FormData) => {
    const title = formData.get('title') as string;
    const image = formData.get('image') as File;

    if (!title || !image || image.size === 0) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please provide a title and an image file.",
      });
      return;
    }
    
    try {
      const result = await uploadArtwork(formData);
      if (result.error) {
        throw new Error(result.error);
      }
      toast({
        title: "Upload Successful",
        description: "The new artwork has been added to the gallery.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: (error as Error).message || "An unknown error occurred.",
      });
    }
  };
  
  const handleProfilePictureUpload = async (formData: FormData) => {
    const image = formData.get('profile-image') as File;
    if (!image || image.size === 0) {
        toast({
            variant: "destructive",
            title: "Missing file",
            description: "Please select an image to upload.",
        });
        return;
    }

    try {
        const result = await uploadProfilePicture(formData);
        if (result.error) {
            throw new Error(result.error);
        }
        toast({
            title: "Update Successful",
            description: "Your profile picture has been updated.",
        });
    } catch (error) {
         toast({
            variant: "destructive",
            title: "Update Failed",
            description: (error as Error).message || "An unknown error occurred.",
        });
    }
  };


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Artwork</CardTitle>
                <CardDescription>
                  Add a new piece to the gallery. The image will be uploaded and displayed on the gallery page.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleArtworkUpload} className="space-y-6">
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
                <form action={handleProfilePictureUpload} className="space-y-6">
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
