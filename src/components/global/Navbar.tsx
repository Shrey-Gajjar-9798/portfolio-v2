// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-24 py-4 z-50 max-sm:px-2 max-sm:py-6 ">
            {/* Left side - Name */}
            <h1 className="text-2xl max-sm:text-xl font-extrabold tracking-wider text-[#4dbbbb] font-dancing-script">Shrey Gajjar</h1>

            {/* Right side - Button */}
            <Link
                href="#contact"
                className="px-4 py-2 max-sm:px-2 max-sm:py-1 border border-[#4dbbbb] rounded-full text-[#4dbbbb] hover:bg-[#649696] hover:text-black transition font-didone font-medium backdrop-blur-lg"
            >
                Let&apos;s Work
            </Link>
        </nav>
    );
}
