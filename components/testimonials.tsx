import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BorderBeam } from "@/components/ui/border-beam"

export function Testimonials() {
    return (
        <section className="py-8 md:py-12 lg:py-16">
            <div className="mx-auto  space-y-8 md:space-y-12 lg:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-4 text-center sm:space-y-6 md:space-y-8 lg:max-w-xl lg:space-y-12">
                    <h2 className="text-3xl font-medium sm:text-4xl md:text-5xl lg:text-5xl">
                        Build by makers, loved by thousand developers
                    </h2>
                    <p className="text-sm sm:text-base md:text-base">
                        Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping
                        developers and businesses innovate.
                    </p>
                </div>

                <div className="grid gap-3 sm:gap-4 md:gap-4 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto lg:auto-rows-[minmax(auto,1fr)]">
                    {/* Large featured card */}
                    <Card className="grid grid-rows-[auto_1fr] gap-6 sm:gap-8 sm:col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 p-4 sm:p-6 relative">
                        <CardHeader className="p-0">
                            <img
                                className="h-5 w-fit dark:invert sm:h-6"
                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                alt="Nike Logo"
                                height="24"
                                width="auto"
                            />
                        </CardHeader>
                        <CardContent className="p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-4 sm:gap-6">
                                <p className="text-base sm:text-lg md:text-xl font-medium">
                                    Tailus has transformed the way I develop web applications. Their extensive collection of UI
                                    components, blocks, and templates has significantly accelerated my workflow. The flexibility to
                                    customize every aspect allows me to create unique user experiences. Tailus is a game-changer for
                                    modern web development
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-2 sm:gap-3">
                                    <Avatar className="size-10 sm:size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/shekinah.webp"
                                            alt="Shekinah Tshiokufila"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>ST</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-xs sm:text-sm font-medium block">Shekinah Tshiokufila</cite>
                                        <span className="text-muted-foreground block text-xs sm:text-sm">Software Engineer</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                        <BorderBeam duration={8} size={100} />
                    </Card>

                    {/* Second card */}
                    <Card className="sm:col-span-1 md:col-span-2 lg:col-span-2 p-4 sm:p-6 relative">
                        <CardContent className="h-full p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-4 sm:gap-6">
                                <p className="text-base sm:text-lg md:text-xl font-medium">
                                    Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-2 sm:gap-3">
                                    <Avatar className="size-10 sm:size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/jonathan.webp"
                                            alt="Jonathan Yombo"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>JY</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-xs sm:text-sm font-medium block">Jonathan Yombo</cite>
                                        <span className="text-muted-foreground block text-xs sm:text-sm">Software Engineer</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                        <BorderBeam duration={8} size={100} />
                    </Card>

                    {/* Third card */}
                    <Card className="sm:col-span-1 lg:col-span-1 p-4 sm:p-6 relative">
                        <CardContent className="h-full p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-4 sm:gap-6">
                                <p className="text-sm sm:text-base md:text-base">
                                    Great work on tailfolio template. This is one of the best personal website that I have seen so far!
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-2 sm:gap-3">
                                    <Avatar className="size-10 sm:size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/yucel.webp"
                                            alt="Yucel Faruksahan"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>YF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-xs sm:text-sm font-medium block">Yucel Faruksahan</cite>
                                        <span className="text-muted-foreground block text-xs sm:text-sm">Creator, Tailkits</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                        <BorderBeam duration={8} size={100} />
                    </Card>

                    {/* Fourth card */}
                    <Card className="sm:col-span-1 lg:col-span-1 p-4 sm:p-6 relative">
                        <CardContent className="h-full p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-4 sm:gap-6">
                                <p className="text-sm sm:text-base md:text-base">
                                    Great work on tailfolio template. This is one of the best personal website that I have seen so far!
                                </p>

                                <div className="grid grid-cols-[auto_1fr] gap-2 sm:gap-3 items-center">
                                    <Avatar className="size-10 sm:size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/rodrigo.webp"
                                            alt="Rodrigo Aguilar"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>RA</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-xs sm:text-sm font-medium block">Rodrigo Aguilar</p>
                                        <span className="text-muted-foreground block text-xs sm:text-sm">Creator, TailwindAwesome</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                        <BorderBeam duration={8} size={100} />
                    </Card>
                </div>
            </div>
        </section>
    )
}
