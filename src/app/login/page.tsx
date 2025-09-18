
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signInUser } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInUser(email, password);
      toast({
        title: "Login Successful",
        description: "Redirecting to admin dashboard...",
      });
      router.push('/admin');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: (error as Error).message || "Please check your credentials and try again.",
      });
       setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>
                Please enter your credentials to access the admin dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignIn} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="admin@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin" /> : 'Sign In'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
