import { Contact } from "@/components/home/contact";
import { Features } from "@/components/home/features";
import HeroSection from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { Skills } from "@/components/home/skills";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12  relative">
      <HeroSection />
      <Skills />
      <Projects />
      <Features />
      {/* <Testimonials /> */}
      <Contact />
      <div className='fixed sm:bottom-10 bottom-5 sm:right-10 right-5 z-50'>
        <Link
          href={DATA.whatshap}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.whatsapp className='size-12' />
        </Link>
      </div>
    </div>
  );
}
