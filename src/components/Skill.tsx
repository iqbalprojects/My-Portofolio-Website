import React from "react";

const Skill = () => {
    return (
        <div className="mt-[95px] grid justify-center">
            <p className="text-2xl leading-[31px] tracking-[0.02em] text-center max-w-2xl">
                I&apos;m currently looking to join a{" "}
                <span className="text-[#A362FF]">cross-functional</span> team{" "}
                <span className="text-[17px]">
                    that values improving people&apos;s lives through accessible
                    design
                </span>
            </p>
            <div className="flex items-center gap-x-4 mx-auto mt-8">
                <div>
                    <div className="w-11 h-11 bg-white/10 rounded-full"></div>
                </div>
                <div>
                    <div className="w-11 h-11 bg-white/10 rounded-full"></div>
                </div>
                <div>
                    <div className="w-11 h-11 bg-white/10 rounded-full"></div>
                </div>
                <div>
                    <div className="w-11 h-11 bg-white/10 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
