import { Educations } from "@/components/home/educations";
import { Features } from "@/components/home/features";
import HeroSection from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { Skills } from "@/components/home/skills";
import { Work } from "@/components/home/work";


export default function Home() {
  return (
    <div className="space-y-8 container">
      <HeroSection />
      <Skills />
      {/* <Work />
      <Educations /> */}
      <Features />
      <Projects />
    </div>
  );
}
