import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY, DATA } from "@/data/resume";
import { cn } from "@/lib/utils";


export function Skills() {
    return (
        <section id="skills" >
            <div className="flex flex-col gap-y-8">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="md:text-3xl  font-bold">Skills & Technologies</h2>
                </BlurFade>
                <div className="space-y-6">
                    {DATA.skills.map((skill, id) => {
                        const TitleIcon = skill.icon
                        return (
                            <div key={id} className="space-y-4">
                                <BlurFade delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                                    <div className="flex items-center gap-3">
                                        <div className={cn("p-2 rounded-lg border bg-linear-to-br", skill.gradient)}>
                                            <TitleIcon className="size-4" />
                                        </div>
                                        <h1>{skill.title}</h1>
                                    </div>
                                </BlurFade>
                                <div className="flex items-center gap-4 flex-wrap">
                                    {skill.skill.map((s, sid) => {
                                        const SkillIcon = s.icon
                                        return (
                                            <BlurFade key={sid} delay={BLUR_FADE_DELAY * 10 + id * 0.05 + sid * 0.05}>
                                                <div className={cn("relative px-4 py-3 flex items-center gap-2  rounded-lg border bg-linear-to-br  border-primary/30")}>
                                                    <SkillIcon className="size-6" />
                                                    <p className="font-medium font-sans text-sm whitespace-nowrap">{s.name}</p>
                                                </div>
                                            </BlurFade>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}