import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY, DATA } from "@/data/resume";
import Image from "next/image";
import Markdown from "react-markdown";


export default function HeroSection() {
    return (
        <div className="py-8 lg:py-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-3 gap-10 ">
                <div className="lg:col-span-2 md:col-span-1 col-span-1 my-auto flex flex-col items-start">
                    <div className="flex-1 space-y-4">
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <h1 className="leading-relaxed md:text-2xl text-base font-medium">Welcome to My World</h1>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 9} className="">
                            <p className="lg:text-5xl text-3xl  font-bold" >
                                Hi, I’m <span className="text-rose-500">{DATA.fullName}</span>{" "} <br />
                                {DATA.role}.
                            </p>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <div className=" max-w-full text-pretty font-sans text-sm text-muted-foreground">
                                <Markdown>
                                    {DATA.about}
                                </Markdown>
                            </div>
                        </BlurFade>
                    </div>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY * 9} className="aspect-square border-4  rounded-md bg-linear-to-br shadow-lg shadow-black/5 backdrop-blur from-purple-400/20 via-purple-300/10 to-background border-purple-400/40">
                    <div className="rounded-full  h-full">
                        <Image
                            src={"/user.png"}
                            alt="pofile"
                            fill
                            className="object-cover rounded-sm"
                        />
                    </div>
                </BlurFade>
            </div>
        </div>
    )
}