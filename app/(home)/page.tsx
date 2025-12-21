import { Suspense } from "react"
import Link from "next/link"
import { DATA } from "@/data/resume"

import { Contact } from "@/components/home/contact"
import { Features } from "@/components/home/features"
import HeroSection from "@/components/home/hero"
import { Projects } from "@/components/home/projects"
import { Skills } from "@/components/home/skills"
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <div className="relative space-y-12">
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <Features />
      </Suspense>
      {/* <Testimonials /> */}
      <Contact />
      <div className="fixed right-5 bottom-5 z-50 sm:right-10 sm:bottom-10">
        <Link href={DATA.whatshap} target="_blank" rel="noopener noreferrer">
          <Icons.whatsapp className="size-12" />
        </Link>
      </div>
    </div>
  )
}
