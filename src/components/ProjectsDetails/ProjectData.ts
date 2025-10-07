import React from "react";

export interface Feature {
    id: number;
    title: string;
    icon: React.ReactNode;
}

export interface Project {
    key: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

export const projects = [
    {
        title: "ZLAYER",
        description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
        src: "zlayer.png",
        link: "https://zlayer.ai",
        color: "#3B3838"
    },
    {
        title: "LayerZero Bridge",
        description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
        src: "lzbridge.png",
        link: "https://lzbridge.vercel.app",
        color: "#3B3838"
    },
    {
        title: "Section51",
        description: "A scalable, AI-enhanced OTC trading platform enabling intent-driven swaps between ERC20 tokens, NFTs, and point/pre-tokens. Powered by ZetaChain for seamless cross-chain execution, it includes a developer-friendly SDK and smart, gas-optimized contracts for high-performance trading across blockchain ecosystems.",
        src: "sector.png",
        link: "https://sector51.ai",
        color: "#3B3838"
    },
    {
        title: "SENDACROSS",
        description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
        src: "sendacross.png",
        link: "https://sendacross.ai",
        color: "#3B3838"
    },
    {
        title: "Stable InvoicePay & Payroll",
        description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, &apos;all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
        src: "stablecoin.png",
        link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
        color: "#3B3838"
    }
]