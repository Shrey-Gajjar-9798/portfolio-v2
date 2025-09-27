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

export const projectData: Project[] = [
    {
        key: 1,
        title: "Zlayer",
        image: "/projects/zlayer.png",
        link: "https://zlayer.ai/",
        description: "ZLayer is a decentralized personalization platform that empowers users to take control of their private Web2 data by securely integrating it into the Web3 ecosystem. Users are rewarded for sharing their data, enabling AI agents and brands to deliver hyper-personalized experiences tailored to individual preferences. With zLayer, users can unlock the full potential of their data while maintaining privacy and security",
    },
    {
        key: 2,
        title: "Sofia AI",
        image: "/projects/sofiaai.png",
        link: "https://sofiaai.vercel.app/",
        description: "Sofia AI is a Defai platform for building smart, personality-driven agents that perform Web3 tasks like swaps, transfers, and bridging. With modular design, self-learning, and deep knowledge integration, Sofia connects across platforms like Discord and Telegram—ideal for creating autonomous, evolving agents in decentralized and interactive environments.",
    },

]