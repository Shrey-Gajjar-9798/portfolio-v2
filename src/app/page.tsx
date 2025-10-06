"use client";
import ConnectSection from "@/components/ConnectSection";
import { FeaturesSection } from "@/components/featureSet/FeatureGrid";
import Preloader from "@/components/global/Preloader";
import Scrolltext from "@/components/global/Scrolltext";
import HomePageSection from "@/components/HomeSection";
import ProjectDetails from "@/components/ProjectsDetails";
import Skills from "@/components/Skills";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2600)
      }
    )()
  }, [])

  return (
    <div className="w-full h-full">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <HomePageSection />
      <Scrolltext />
      <FeaturesSection />
      <Skills />
      <ProjectDetails />
      <ConnectSection />
    </div>
  );
}
