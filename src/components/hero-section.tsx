
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ArtworkSlideshow } from './artwork-slideshow';
import { db } from '@/lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function HeroSection() {

  const [profilePicUrl, setProfilePicUrl] = useState("https://picsum.photos/seed/profile/600/600");
  
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "config", "profile"), (doc) => {
        if(doc.exists() && doc.data().profilePictureUrl) {
            setProfilePicUrl(doc.data().profilePictureUrl);
        }
    });
    return () => unsub();
  }, []);
  
  const shortBio = "My name is Emmanuel Eweje, and I offer a unique perspective in the realm of contemporary art, driven by a deep passion for creative diversity and a keen eye for design. Over the years, my journey as an artist has been marked by significant achievements, including winning the Next Rated Star award in the Art category and receiving recognition from esteemed competitions like the National Visual Art Competition and the Leap Africa Art Competition. These accomplishments stand as testaments to my dedication and talent in the field. My artistic practice encompasses a wide range of mediums, from drawing to acrylic painting and thread painting . I approach each piece with meticulous attention to detail and a profound understanding of cultural symbolism, aiming to foster dialogue and embrace diversity through my art. Beyond creating art, I have utilized my talents to make a positive impact in my community. As an Arts in Medicine Fellow and art teacher, I have witnessed firsthand the transformative power of art in healing and education. Additionally, my work as a muralist with the House of Bezalel Mural and Graffiti Artist Collective has allowed me to contribute to vibrant urban landscapes and ignite meaningful conversations through bold and dynamic murals. My artworks have been showcased in various exhibitions and competitions, both locally and internationally, including the Connect residency/exhibition in Chicago and the Spanish Embassy Art Competition. These experiences have reinforced my commitment to pushing boundaries and challenging conventional artistic norms. With a diverse skill set that encompasses technical abilities, interpersonal skills, and critical thinking, I continue to explore new avenues in my artistic practice. Through my work, I strive to foster connections, provoke thought, and inspire dialogue, inviting viewers to engage with complex themes of identity, memory, and cultural heritage";

  const artistStatement = "As a child growing up in the tranquil Nigerian rural town of Agbeye, I was deeply influenced by my mother's small-scale business in textile weaving and crocheting, it was always a joy for me to do the cleanup chore, as it affords me close contact time with the textile and to collect colourful fabric pieces left for waste. In my journey as an artist, I was opportune during my time at Obafemi Awolowo University to be part of the Nigeria burgeoning visual arts movement known as \"Araism.\" This movement, characterized by an innovative use of colour pointillism and acrylic painting processes, captivated me immediately. What struck me most about Araism was its ability to transport the observer into a realm of mystique through the applicative use of black toned backgrounds to achieve a linear outline of the painted image. A creative metaphor rooted in the many complexities which forms popular knowledge in the Yoruba society, with a power to immersing the observer in the collective cultural experience of the Yoruba people. As an artist, the theoretical interests of my practice are based on the exploration and liberation of Black culture, shared human experiences, and exploring notions of self, relationships, and community. I have worked with many mediums, with a recent focus on fabric materials, using textiles such as yarn, or thread to create impressionist style artworks on a two-dimensional surface as well as acrylic on canvas. I find this technique suitable to my notion of perceiving creativity as the surmount of a challenging process, beyond its literal meaning but for its significance as well as the human labour involved. Without the exposure to needlework hazards, my working process involves but is not limited, to laying side by side millions of colourful threads in different lengths to bring to life a composition of my subject and background. Well, secured to the canvas with urethane shoe glue, because of its strength and waterproof quality as well as resistance to heat and cold.";

  return (
    <section id="about" className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <ArtworkSlideshow />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
              Emmanuel Eweje - A Contemporary Artist
            </h1>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              {shortBio}
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/gallery">
                Explore more of my Artworks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
             <Image
                src={profilePicUrl}
                alt="Emmanuel Eweje profile picture"
                width={400}
                height={400}
                className="rounded-3xl aspect-square object-cover"
                data-ai-hint="artist portrait"
              />
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center">Artist Statement</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed text-justify">
              {artistStatement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
