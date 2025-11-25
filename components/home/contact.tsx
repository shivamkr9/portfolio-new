
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BiBuildingHouse } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

export function Contact() {
    return (
        <section className="py-4 md:py-8 lg:py-12">
            <div className="mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
                    <div className="lg:aspect-square aspect-auto ">
                        <div className="py-4 md:py-8 lg:py-12 space-y-6">
                            <h1 className="lg:text-4xl text-2xl  font-semibold">Get in touch</h1>
                            <p className="lg:text-base text-sm text-muted-foreground">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <BiBuildingHouse className="lg:size-8 size-6 text-muted-foreground" />
                                <div className="lg:text-base text-sm">
                                    545 Mavis Island <br />
                                    Chicago, IL 99191
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <IoCallOutline className="lg:size-8 size-6 text-muted-foreground" />
                                <div className="lg:text-base text-sm">
                                    +91 62032 57318
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <CiMail className="lg:size-8 size-6 text-muted-foreground" />
                                <div className="lg:text-base text-sm">
                                    sk9355622@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 md:py-8 lg:py-12 pb-0 lg:space-y-6 space-y-4 ">
                        <div className="space-y-3">
                            <Label htmlFor="name">Name</Label>
                            <Input className="rounded-md text-base shadow-none" placeholder="Name" />
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="email">Email</Label>
                            <Input className="rounded-md text-base shadow-none" placeholder="Email" />
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="phone">Phone number</Label>
                            <Input className="rounded-md text-base shadow-none" type="number" placeholder="Phone number" />
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="phone">Message</Label>
                            <Textarea className="rounded-md text-base min-h-[200px] resize-none shadow-none" placeholder="Phone number" />
                        </div>
                        <div className="text-end">
                            <Button>Send message</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}