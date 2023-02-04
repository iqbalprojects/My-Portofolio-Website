import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-navbar">
            <div className="container mx-auto flex justify-between items-center">
                <div className="py-9">
                    <Logo />
                </div>
                <div className="flex items-center gap-40 font-plusjakartasans">
                    <Link href={""}>Home</Link>
                    <Link href={""}>About</Link>
                    <Link href={""}>Lab</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
