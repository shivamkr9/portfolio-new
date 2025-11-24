import { Educations } from "@/components/home/educations";
import { Features } from "@/components/home/features";
import HeroSection from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { Skills } from "@/components/home/skills";
import { Work } from "@/components/home/work";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <div className="space-y-4 container">
      <HeroSection />
      <div className="lg:py-16 py-8">
        <Separator />
      </div>
      <Skills />
      <div className="lg:py-16 py-8">
        <Separator />
      </div>
      <Work />
      <div className="lg:py-16 py-8">
        <Separator />
      </div>
      <Educations />
      <div className="lg:py-16 py-8">
        <Separator />
      </div>
      <Features />
      <div className="lg:py-16 py-8">
        <Separator />
      </div>
      <Projects />
      <div className="lg:py-16 py-8">
        <Separator />
      </div>

    </div>
  );
}
