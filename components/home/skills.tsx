import { BLUR_FADE_DELAY, DATA } from "@/data/resume"

import { cn } from "@/lib/utils"
import BlurFade from "@/components/magicui/blur-fade"

export function Skills() {
  return (
    <section id="skills">
      <div className="flex flex-col gap-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="font-bold md:text-3xl">Skills & Technologies</h2>
        </BlurFade>
        <div className="space-y-6">
          {DATA.skills.map((skill, id) => {
            const TitleIcon = skill.icon
            return (
              <div key={id} className="space-y-4">
                <BlurFade delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "rounded-lg border bg-linear-to-br p-2",
                        skill.gradient
                      )}
                    >
                      <TitleIcon className="size-4" />
                    </div>
                    <h1>{skill.title}</h1>
                  </div>
                </BlurFade>
                <div className="flex flex-wrap items-center gap-4">
                  {skill.skill.map((s, sid) => {
                    const SkillIcon = s.icon
                    return (
                      <BlurFade
                        key={sid}
                        delay={BLUR_FADE_DELAY * 10 + id * 0.05 + sid * 0.05}
                      >
                        <div
                          className={cn(
                            "border-primary/30 relative flex items-center gap-2 rounded-lg border bg-linear-to-br px-4 py-3"
                          )}
                        >
                          <SkillIcon className="size-6" />
                          <p className="font-sans text-sm font-medium whitespace-nowrap">
                            {s.name}
                          </p>
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
