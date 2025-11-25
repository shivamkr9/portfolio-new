import { BLUR_FADE_DELAY } from "@/data/resume";
import { ReactNode } from "react";
import { IconProps, Icons } from "../icons";
import BlurFade from "../magicui/blur-fade";
import { BorderBeam } from "../ui/border-beam";

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
];

const frameworksSkills: SkillsInterface[] = [
    {
        id: 1,
        name: "React.js", // Standard naming
        icon: Icons.react,
    },
    {
        id: 2,
        name: "Next.js", // Standard naming
        icon: Icons.nextjs,
    },
    {
        id: 3,
        name: "Express.js", // Consistent naming
        icon: Icons.express,
    },
    {
        id: 4,
        name: "Tailwind CSS",
        icon: Icons.tailwind,
    },
];

const devopsSkills: SkillsInterface[] = [
    {
        id: 1,
        name: "AWS",
        icon: Icons.aws,
    },
    {
        id: 2,
        name: "Docker",
        icon: Icons.docker,
    },
    {
        id: 3,
        name: "Github",
        icon: Icons.github,
    },
    {
        id: 4,
        name: "Kubernetes",
        icon: Icons.kubernetes,
    },
];

const databaseSkills: SkillsInterface[] = [
    {
        id: 1,
        name: "PostgreSQL",
        icon: Icons.postgresql,
    },
    {
        id: 2,
        name: "MongoDB",
        icon: Icons.mongodb,
    },
];


export function Skills() {
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="text-xl font-bold">Skills</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-4">
                    {programmingSkills.map((skill, id) => (
                        <BlurFade key={skill.id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                            <div className="relative px-4 py-3 flex items-center gap-2 border rounded-md ">
                                <skill.icon className="size-8" />
                                <p className="font-medium font-sans text-sm">{skill.name}</p>
                                <BorderBeam duration={8} size={100} />
                            </div>
                        </BlurFade>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4">
                    {frameworksSkills.map((skill, id) => (
                        <BlurFade key={skill.id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                            <div className="relative px-4 py-3 flex items-center gap-2 border rounded-md ">
                                <skill.icon className="size-8" />
                                <p className="font-medium font-sans text-sm">{skill.name}</p>
                                <BorderBeam
                                    duration={8} size={100}
                                    className="from-transparent via-pink-500  to-transparent"
                                />
                            </div>
                        </BlurFade>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4">
                    {databaseSkills.map((skill, id) => (
                        <BlurFade key={skill.id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                            <div className="relative px-4 py-3 flex items-center gap-2 border rounded-md ">
                                <skill.icon className="size-8" />
                                <p className="font-medium font-sans text-sm">{skill.name}</p>
                                <BorderBeam duration={8} size={100} />
                            </div>
                        </BlurFade>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4">
                    {devopsSkills.map((skill, id) => (
                        <BlurFade key={skill.id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                            <div className="relative px-4 py-3 flex items-center gap-2 border rounded-md ">
                                <skill.icon className="size-8" />
                                <p className="font-medium font-sans text-sm">{skill.name}</p>
                                <BorderBeam
                                    duration={8} size={100}
                                    className="from-transparent via-green-500 to-transparent"
                                />
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}