import Image from "next/image"
import { BLUR_FADE_DELAY, DATA } from "@/data/resume"
import Markdown from "react-markdown"

import BlurFade from "@/components/magicui/blur-fade"

export default function HeroSection() {
  return (
    <div className="py-8 lg:py-4">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        <div className="col-span-1 my-auto flex flex-col items-start md:col-span-1 lg:col-span-2">
          <div className="flex-1 space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h1 className="text-base leading-relaxed font-medium md:text-2xl">
                Welcome to My World
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 9} className="">
              <p className="text-3xl font-bold lg:text-5xl">
                Hi, I’m <span className="text-rose-500">{DATA.fullName}</span>{" "}
                <br />
                {DATA.role}.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="text-muted-foreground max-w-full font-sans text-sm text-pretty">
                <Markdown>{DATA.about}</Markdown>
              </div>
            </BlurFade>
          </div>
        </div>
        <BlurFade
          delay={BLUR_FADE_DELAY * 9}
          className="to-background aspect-square rounded-md border-4 border-purple-400/40 bg-linear-to-br from-purple-400/20 via-purple-300/10 shadow-lg shadow-black/5 backdrop-blur"
        >
          <div className="h-full rounded-full">
            <Image
              src={"/user.png"}
              alt="pofile"
              fill
              className="rounded-sm object-cover"
            />
          </div>
        </BlurFade>
      </div>
    </div>
  )
}
