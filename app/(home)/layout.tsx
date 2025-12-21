import { Suspense } from "react"
import type { ReactNode } from "react"

import { FooterSection } from "@/components/footer"
import { HeroHeader } from "@/components/header"

type Props = {
  children: ReactNode
}

export default function RootAppLayout({ children }: Props) {
  return (
    <main className="from-background via-background to-muted/40 relative isolate min-h-dvh overflow-hidden bg-linear-to-b">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="bg-primary/30 absolute -top-32 right-10 h-72 w-72 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-0 h-112 w-md rounded-full bg-pink-400/25 blur-[150px]" />
      </div>
      <HeroHeader />
      <div className="h-(--heading-height) [--heading-height:5rem]">
        <span className="sr-only">for subtract header height only</span>
      </div>
      <section className="mx-auto max-w-7xl px-4">{children}</section>
      <Suspense fallback={null}>
        <FooterSection />
      </Suspense>
    </main>
  )
}
