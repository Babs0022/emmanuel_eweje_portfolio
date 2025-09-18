
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Loader2, Sparkles } from 'lucide-react';
import { expandArtistBioAction } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export default function HeroSection() {
  const [expandedBio, setExpandedBio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const shortBio = "Emmanuel Eweje is a contemporary artist known for his vibrant and expressive works that explore the intersection of culture, identity, and the human experience. His art invites viewers into a world of rich color and dynamic form.";

  const handleExpandBio = async () => {
    setIsLoading(true);
    setError('');
    setIsDialogOpen(true);
    const result = await expandArtistBioAction({ shortBio });

    if (result.error) {
      setError(result.error);
      setExpandedBio('');
    } else if (result.expandedBio) {
      setExpandedBio(result.expandedBio);
    }
    setIsLoading(false);
  };

  return (
    <section id="about" className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Emmanuel Eweje - A Contemporary Artist
        </h1>
        <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
          {shortBio}
        </p>
        <Button onClick={handleExpandBio} className="mt-8" size="lg" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Expand Bio with AI
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Artist Biography</DialogTitle>
          </DialogHeader>
          {isLoading && (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {expandedBio && (
            <DialogDescription className="text-base text-foreground/80 leading-relaxed prose prose-p:text-foreground/80">
              {expandedBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </DialogDescription>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
