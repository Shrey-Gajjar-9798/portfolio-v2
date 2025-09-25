"use client";

import React from 'react'
import LightRays from './LightRay'
import Lanyard from './ProfileCard'
import ProfileInfo from './ProfileInfo';

const HomePageSection = () => {
    return (
        <div className='w-full h-dvh'>
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
            <div className="absolute top-1/2 left-1/2 w-full z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <ProfileInfo />
            </div>

            {/* Lanyard on top */}
            <div className="absolute inset-0 z-20">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>

        </div>
    )
}

export default HomePageSection