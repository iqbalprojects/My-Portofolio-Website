import Arrow from "@/assets/Arrow";
import Gradient from "@/assets/Gradient";
import Image from "next/image";
import React from "react";
const Hero = () => {
    return (
        <div className="mt-28">
            <div className="relative">
                <Arrow className="absolute left-[230px] top-7" />
                <p className="text-[19px] leading-[97px] -tracking-[0.5px] absolute left-[315px] -top-6">
                    Hello! I Am <span className="text-primary">Iqbal</span>
                </p>
            </div>
            <div className="relative w-full max-w-3xl">
                <Gradient className="w-[385px] h-[431px] grid place-content-center">
                    <div className="bg-gradient-radial-secondary w-[258px] h-[259px]"></div>
                    <div className="flex items-center gap-[53px] absolute top-20 left-[110px]">
                        <Image
                            src="/hero.png"
                            alt="Hero"
                            width={165}
                            height={223}
                            priority
                        />
                        <div className="tracking-[0.02em]">
                            <p>A Designer who</p>
                            <p className="text-[50px] leading-[63.33px]">
                                Judges a book by its{" "}
                                <span className="text-primary inline-block relative">
                                    cover
                                    <span className="h-14 w-48 border rounded-[50%] -rotate-[4.74deg] absolute -left-3" />
                                </span>
                                ...
                            </p>
                            <p className="mt-[3px] text-[11px] leading-[19.87px]">
                                Because if the cover does not impress you what
                                else can?
                            </p>
                        </div>
                    </div>
                </Gradient>
            </div>
        </div>
    );
};

export default Hero;
