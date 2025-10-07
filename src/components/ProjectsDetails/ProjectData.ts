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
        description: "ZLayer is a decentralized personalization platform that empowers users to take control of their private Web2 data by securely integrating it into the Web3 ecosystem. Users are rewarded for sharing their data, enabling AI agents and brands to deliver hyper-personalized experiences tailored to individual preferences. With zLayer, users can unlock the full potential of their data while maintaining privacy and security",
        src: "zlayer.png",
        link: "https://zlayer.ai",
        color: "#3B3838"
    },
    {
        title: "LayerZero Bridge",
        description: "A cross‑chain bridging protocol built on LayerZero, enabling users to send native tokens from one chain to multiple destination chains in a single transaction. Optimized for gas efficiency and usability, the bridge estimates and bundles LayerZero fees, handles routing to multiple target chains, and supports scalable, native-token transfers across diverse blockchains.",
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
        description: "SendAcross is a decentralized Web3 platform that merges secure messaging, crypto payments, and AI-powered tools into one seamless experience. It offers encrypted Web3 email, real-time chat, interactive frames (for in-chat payments, NFTs, voting), invoicing, and multi-chain support for transactions across Ethereum, Polygon, BNB, and more. With built-in tools like the AI agent “Alex,” users can swap, bridge and manage payments—all within the same interface",
        src: "sendacross.png",
        link: "https://sendacross.ai",
        color: "#3B3838"
    },
    {
        title: "Stable InvoicePay & Payroll",
        description: "Developed a blockchain-based payroll solution enabling companies to pay global employees and contractors using stablecoins (e.g. USDC, USDT). The platform supports automated, secure, and compliant cross-border payments, with options to fund payroll via fiat or crypto. Key features include smart contract-powered payouts, contractor invoicing, multi-chain support, and built-in compliance tools.",
        src: "stablecoin.png",
        link: "",
        color: "#3B3838"
    }
]