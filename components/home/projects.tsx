
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";



export const projectsData = [
    {
        title: "E-Commerce Web App",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        description:
            "A full-featured e-commerce platform with authentication, payments, product filtering, and admin dashboard.",
        image: "/projects/shoping.jpg",
        link: "#",
        accent:
            'from-emerald-300/20 via-emerald-200/10 to-background border-emerald-300/40',
    },
    {
        title: "Real-Time Chat App",
        techStack: ["React", "Firebase", "Zustand", "CSS Modules"],
        description:
            "A real-time messaging application with user presence status and live group conversations.",
        image: "/projects/shoping.jpg",
        link: "#",
        accent:
            'from-purple-400/20 via-purple-300/10 to-background border-purple-400/40',
    },
    {
        title: "Project Management Tool",
        techStack: ["Next.js", "Supabase", "Tailwind CSS", "Shadcn UI"],
        description:
            "Kanban-style project management app inspired by Jira with drag-and-drop tasks and role-based access.",
        image: "/projects/shoping.jpg",
        link: "#",
        accent:
            'from-cyan-400/20 via-cyan-200/10 to-background border-cyan-400/40',
    },
    {
        title: "Portfolio Website",
        techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
        description:
            "Developer portfolio with smooth animations, blog section, and project showcase.",
        image: "/projects/shoping.jpg",
        link: "#",
        accent: 'from-primary/20 via-primary/5 to-background border-primary/40',
    },
    {
        title: "Weather Forecast App",
        techStack: ["React", "OpenWeather API", "CSS Modules"],
        description:
            "A weather app that fetches real-time data using API integration and displays detailed forecasts.",
        image: "/projects/shoping.jpg",
        link: "#",
        accent: 'from-blue-400/20 via-blue-400/5 to-background border-blue-400/40',
    },
    {
        title: "Online Quiz Platform",
        techStack: ["Next.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
        description:
            "An online quiz system with dynamic question rendering, timer, scoring, and leaderboard.",
        image: "/projects/shoping.jpg",
        link: "#",
        accent:
            'from-amber-400/20 via-amber-200/10 to-background border-amber-400/40',
    },
]



export function Projects() {
    return (
        <div className="space-y-4">
            <div className="space-y-2 text-center">
                <h2 className="uppercase text-base font-medium text-rose-500">Visit my portfolio and keep your feedback</h2>
                <h1 className="lg:text-5xl md:text-3xl text-xl font-bold leading-[55px]">My Projects</h1>
            </div>

            <section className="grid gap-6 md:grid-cols-3 mt-8">
                {projectsData.map((p, i) => (
                    <Card
                        key={i}
                        className={`group flex flex-col justify-between rounded-md border bg-linear-to-br p-6 shadow-lg shadow-black/5 backdrop-blur ${p.accent} `}
                    >
                        <CardHeader className="space-y-3 p-0 relative aspect-video">
                            <Image
                                src={p.image}
                                alt="projects"
                                fill
                                className="object-cover rounded-md"
                            />
                        </CardHeader>
                        <CardHeader className="space-y-3 p-0">
                            <CardTitle className="text-2xl font-semibold text-foreground">
                                {p.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-1 flex-wrap">
                                {p.techStack.map((t) => (
                                    <Badge key={t} >
                                        {t}
                                    </Badge>
                                ))}
                            </CardDescription>
                            <CardDescription className="text-base leading-relaxed text-muted-foreground">
                                {p.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="p-0">
                            <Link
                                href={p.link}
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
                ))}
            </section>
        </div>
    )
}

