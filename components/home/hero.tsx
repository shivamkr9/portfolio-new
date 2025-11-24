import Image from "next/image";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";


export default function HeroSection() {
    return (
        <div className="py-8 lg:py-4">
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-10 ">
                <div className="lg:col-span-2 col-span-1 my-auto flex flex-col items-start">
                    <div className="flex-1 space-y-4">
                        <h1 className="leading-relaxed md:text-2xl text-base font-medium">Welcome to my world</h1>
                        <div className="">
                            <p className="lg:text-5xl text-3xl  font-bold" >
                                Hi, I’m <span className="text-rose-500">Shivam Kumar</span>{" "} <br />
                                UI/UX Designer.
                            </p>
                        </div>
                        <p className="text-base text-muted-foreground ">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                    </div>
                    <div className="mt-10 w-full grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h1 className="uppercase text-muted-foreground">find with me</h1>
                            <div className="space-x-4">
                                <Button size={"icon"} className="rounded-md size-10">
                                    <FaFacebookF className="size-4" />
                                </Button>
                                <Button size={"icon"} className="rounded-md size-10">
                                    <CiInstagram className="size-4" />
                                </Button>
                                <Button size={"icon"} className="rounded-md size-10">
                                    <FaLinkedinIn className="size-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="uppercase text-muted-foreground">best skill on</h1>
                            <div className="space-x-4">
                                <Button size={"icon"} className="rounded-md size-10">
                                    <FaFacebookF className="size-4" />
                                </Button>
                                <Button size={"icon"} className="rounded-md size-10">
                                    <CiInstagram className="size-4" />
                                </Button>
                                <Button size={"icon"} className="rounded-md size-10">
                                    <FaLinkedinIn className="size-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aspect-square border-4  rounded-md bg-linear-to-br shadow-lg shadow-black/5 backdrop-blur from-purple-400/20 via-purple-300/10 to-background border-purple-400/40">
                    <div className="rounded-full  h-full">
                        <Image
                            src={"/"}
                            alt="pofile"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}