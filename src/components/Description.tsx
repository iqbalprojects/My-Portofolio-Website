import Image from "next/image";

const Description = () => {
    return (
        <div className="tracking-[0.02em] mt-[10px]">
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
                        height={20}
                        style={{ width: "auto", height: "auto" }}
                        className="mb-1"
                        priority
                    />
                    ARC USK
                </a>
                ,
            </div>
            <p className="mt-[70px] max-w-4xl w-full text-[22px] leading-[39.75px]">
                A self-taught UI/UX designer, functioning in the industry for 3+
                years now.
                <br />I make meaningful and delightful digital products that
                create an equilibrium between user needs and business goals.
            </p>
        </div>
    );
};

export default Description;
