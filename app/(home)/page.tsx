import { Contact } from "@/components/home/contact";
import { Features } from "@/components/home/features";
import HeroSection from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { Skills } from "@/components/home/skills";
import { Icons } from "@/components/icons";
import { Testimonials } from "@/components/testimonials";
import Link from "next/link";


export default function Home() {
  return (
    <div className="space-y-8  relative">
      <HeroSection />
      <Skills />
      <Features />
      <Projects />
      <Testimonials />
      <Contact />
      <div className='fixed sm:bottom-10 bottom-5 sm:right-10 right-5 z-50'>
        <Link href={`https://wa.me/+916203257318?text=hi`} target='_blank'>
          <Icons.whatsapp className='size-8' />
        </Link>
      </div>
    </div>
  );
}
