import Image from "next/image";

const Description = () => {
    return (
        <div className="tracking-[0.02em]">
            <p className="text-[50px] leading-[90.33px]">
                I&apos;m a Web Developer.|
            </p>
            <div className="flex items-center text-[21px] leading-[37.94px]">
                <p className="mr-3">Currently, I&apos;m a Web Developer at</p>
                <a
                    href="https://arc.usk.ac.id/"
                    className="flex items-center text-blue-500 gap-1"
                >
                    <Image
                        src="/usk.png"
                        alt="USK"
                        width={20}
                        height={21}
                        className="mb-1"
                        priority
                    />
                    ARC USK
                </a>
                ,
            </div>
        </div>
    );
};

export default Description;
