import Image from "next/image";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { BLUR_FADE_DELAY } from "@/data/resume";
import BlurFade from "../magicui/blur-fade";
import { IconProps, Icons } from "../icons";
import { ReactNode } from "react";
import Link from "next/link";

interface SocialMediaInterface {
    title: string;
    icon: (props: IconProps) => ReactNode;
    href: string;
}

const socialMedia: SocialMediaInterface[] = [
    {
        "title": "Github",
        icon: Icons.github,
        href: "#"
    },
    {
        title: "linedin",
        icon: Icons.linkedin,
        href: "#"
    },
    {
        title: "x",
        icon: Icons.x,
        href: "#"
    }
]


export default function HeroSection() {
    return (
        <div className="py-8 lg:py-4">
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-10 ">
                <div className="lg:col-span-2 col-span-1 my-auto flex flex-col items-start">
                    <div className="flex-1 space-y-4">
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <h1 className="leading-relaxed md:text-2xl text-base font-medium">Welcome to my world</h1>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 9} className="">
                            <p className="lg:text-5xl text-3xl  font-bold" >
                                Hi, I’m <span className="text-rose-500">Shivam Kumar</span>{" "} <br />
                                UI/UX Designer.
                            </p>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <p className="text-base text-muted-foreground ">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        </BlurFade>

                    </div>
                    <div className="mt-10 w-full grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <BlurFade delay={BLUR_FADE_DELAY * 9}>
                                <h1 className="uppercase text-muted-foreground">find with me</h1>
                            </BlurFade>
                            <div className="flex flex-wrap gap-2">
                                {socialMedia.map((item, id) => (
                                    <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                                        <Button size={"icon"} className="rounded-md " asChild>
                                            <Link href={item.href}>
                                                {
                                                    <item.icon />
                                                }
                                            </Link>
                                        </Button>
                                    </BlurFade>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY * 9} className="aspect-square border-4  rounded-md bg-linear-to-br shadow-lg shadow-black/5 backdrop-blur from-purple-400/20 via-purple-300/10 to-background border-purple-400/40">
                    <div className="rounded-full  h-full">
                        <Image
                            src={"/user.JPG"}
                            alt="pofile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </BlurFade>
            </div>
        </div>
    )
}