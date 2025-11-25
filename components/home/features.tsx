import { buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import Link from "next/link"
import { FiBookOpen, FiSlack } from "react-icons/fi"
import { IoWifiOutline } from "react-icons/io5"
import { LuBotMessageSquare, LuTv } from "react-icons/lu"
import { RxHamburgerMenu } from "react-icons/rx"
import BlurFade from "../magicui/blur-fade"
import { BLUR_FADE_DELAY } from "@/data/resume"


const featuresDetails = [
    {
        icon: RxHamburgerMenu,
        title: 'Business Stratagy',
        description:
            'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        to: "#",
        accent: 'from-primary/20 via-primary/5 to-background border-primary/40',
    },
    {
        icon: FiBookOpen,
        title: 'App Development',
        description: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.',
        to: "#",
        accent:
            'from-emerald-300/20 via-emerald-200/10 to-background border-emerald-300/40',
    },
    {
        icon: LuTv,
        title: 'App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        to: "#",
        accent: 'from-blue-400/20 via-blue-400/5 to-background border-blue-400/40',
    },
    {
        icon: LuBotMessageSquare,
        title: 'Mobile App',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority.',
        to: "#",
        accent:
            'from-purple-400/20 via-purple-300/10 to-background border-purple-400/40',
    },
    {
        icon: IoWifiOutline,
        title: 'CEO Marketing',
        description: 'always free from repetition, injected humour, or non- characteristic words etc.',
        to: "#",
        accent:
            'from-amber-400/20 via-amber-200/10 to-background border-amber-400/40',
    },
    {
        icon: FiSlack,
        title: 'Personal Portfolio April',
        description: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.',
        to: "#",
        accent:
            'from-cyan-400/20 via-cyan-200/10 to-background border-cyan-400/40',
    },
]


export function Features() {
    return (
        <div className="space-y-4" >
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="uppercase text-base font-medium text-rose-500">Features</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h1 className="lg:text-5xl md:text-3xl text-xl font-bold leading-[55px]">What I Do</h1>
            </BlurFade>

            <section className="grid gap-6 md:grid-cols-3 mt-8">
                {featuresDetails.map((f, id) => (
                    <BlurFade
                        key={id}
                        delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                    >
                        <Card

                            className={`group flex flex-col justify-between rounded-md border bg-linear-to-br p-6 shadow-lg shadow-black/5 backdrop-blur gap-4 ${f.accent}`}
                        >
                            <CardHeader className="space-y-3 p-0">
                                <f.icon className="size-8 text-rose-500" />
                            </CardHeader>
                            <CardHeader className="space-y-3 p-0">
                                <CardTitle className="text-2xl font-semibold text-foreground">
                                    {f.title}
                                </CardTitle>
                                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                                    {f.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="p-0 pt-2">
                                <Link
                                    href={f.title}
                                    className={buttonVariants({
                                        variant: 'link',
                                        size: 'sm',
                                        className: 'px-0 text-base font-semibold text-primary',
                                    })}
                                >
                                    Visit →
                                </Link>
                            </CardContent>
                        </Card>
                    </BlurFade>
                ))}
            </section>
        </div>
    )
}