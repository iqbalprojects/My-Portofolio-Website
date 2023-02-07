import Gradient from "@/assets/Gradient";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Experience = () => {
    return (
        <div className="mt-[57px] relative">
            <Gradient className="h-[700px] w-[625px] mx-auto" />
            <div className="absolute w-full bottom-24">
                <p className="text-[40px] mb-11">Work Experience</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <Card
                        className="bg-gradient-linear-1"
                        src="/Rectangle.png"
                        title="CIB on the Mobile"
                    >
                        Take your client onboard seamlessly by our amazing tool
                        of digital onboard process.
                    </Card>
                    <Card
                        className="bg-gradient-linear-2"
                        src="/Rectangle2.png"
                        width={92}
                        height={92}
                        title="CIB on the Mobile"
                    >
                        Take your client onboard seamlessly by our amazing tool
                        of digital onboard process.
                    </Card>
                    <Card
                        className="bg-gradient-linear-2"
                        src="/Rectangle3.png"
                        width={110}
                        height={110}
                        title="CIB on the Mobile"
                    >
                        Take your client onboard seamlessly by our amazing tool
                        of digital onboard process.
                    </Card>
                    <Card
                        className="bg-gradient-linear-3"
                        src="/Rectangle4.png"
                        width={88}
                        height={88}
                        title="CIB on the Mobile"
                    >
                        Take your client onboard seamlessly by our amazing tool
                        of digital onboard process.
                    </Card>
                </div>
            </div>
        </div>
    );
};

const Card = ({
    src,
    children,
    title,
    className,
    width = 115,
    height = 115,
}: {
    src: string;
    children: any;
    title: string;
    className: string;
    width?: number;
    height?: number;
}) => {
    return (
        <div
            className={clsx(
                className,
                "flex items-center gap-8 w-full max-w-lg p-12 bg-gradient-radial-card rounded-2xl border-t-4 border-t-primary shadow-2xl"
            )}
        >
            <Image
                src={src}
                alt="Rectangle"
                width={width}
                height={height}
                priority
            />
            <div className="font-poppins flex flex-col gap-2">
                <p className="font-semibold text-[26px] leading-[32.5px]">
                    {title}
                </p>
                <p className="text-[8px] leading-[10.5px] max-w-[230px]">
                    {children}
                </p>
                <button className="w-fit text-[10px] leading-[15px] py-[10px] px-[23px] border border-secondary rounded-[10px]">
                    LEARN MORE
                </button>
            </div>
        </div>
    );
};

export default Experience;
