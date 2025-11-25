import { BLUR_FADE_DELAY } from "@/data/resume";
import { ReactNode } from "react";
import { IconProps, Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";

interface SkillsInterface {
    id: number;
    name: string;
    icon: (props: IconProps) => ReactNode;
}
const programmingSkills: SkillsInterface[] = [
    {
        id: 1,
        name: "JavaScript", // Capitalized correctly
        icon: Icons.js,
    },
    {
        id: 2,
        name: "TypeScript", // Capitalized correctly
        icon: Icons.ts,
    },
    {
        id: 3,
        name: "Python",
        icon: Icons.python,
    },
    {
        id: 4,
        name: "React.js", // Standard naming
        icon: Icons.react,
    },
    {
        id: 5,
        name: "Next.js", // Standard naming
        icon: Icons.nextjs,
    },
    {
        id: 6,
        name: "Express.js", // Consistent naming
        icon: Icons.express,
    },
    {
        id: 7,
        name: "Tailwind CSS",
        icon: Icons.tailwind,
    },
    {
        id: 8,
        name: "AWS",
        icon: Icons.aws,
    },
    {
        id: 9,
        name: "Docker",
        icon: Icons.docker,
    },
    {
        id: 10,
        name: "Github",
        icon: Icons.github,
    },
    {
        id: 11,
        name: "Kubernetes",
        icon: Icons.kubernetes,
    },
    {
        id: 12,
        name: "PostgreSQL",
        icon: Icons.postgresql,
    },
    {
        id: 13,
        name: "MongoDB",
        icon: Icons.mongodb,
    },
];


export function Skills() {
    return (
        <section id="skills" >
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="text-xl font-bold">Skills</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-4">
                    {programmingSkills.map((skill, id) => (
                        <BlurFade key={skill.id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                            <div className="relative px-4 py-3 flex items-center gap-2  rounded-md border bg-linear-to-br from-primary/20 via-primary/5 to-background border-primary/40">
                                <skill.icon className="size-7" />
                                <p className="font-medium font-sans text-sm">{skill.name}</p>
                                {/* <BorderBeam duration={8} size={100} /> */}
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}