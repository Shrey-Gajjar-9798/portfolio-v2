"use client";
import LightRays from "@/components/HomeSection/LightRay";
import Lanyard from "@/components/HomeSection/ProfileCard";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-dvh absolute">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      </div>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}
