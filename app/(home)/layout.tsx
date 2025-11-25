import { FooterSection } from "@/components/footer"
import { HeroHeader } from "@/components/header"
import { ReactNode } from "react"


type Props = {
    children: ReactNode
}

export default function RootAppLayout({ children }: Props) {

    return (

        <main className="relative isolate min-h-dvh overflow-hidden bg-linear-to-b from-background via-background to-muted/40">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
                <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-primary/30 blur-[120px]" />
                <div className="absolute bottom-10 left-0 h-112 w-md rounded-full bg-pink-400/25 blur-[150px]" />
            </div>
            <HeroHeader />
            <div className="[--heading-height:5rem] h-(--heading-height)">
                <span className="sr-only">for subtract header height only</span>
            </div>
            <section className="max-w-6xl mx-auto">
                {children}
            </section>
            <FooterSection />
        </main>

    )
}