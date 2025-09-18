
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminPage() {
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
                <form className="space-y-6">
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
                <form className="space-y-6">
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
