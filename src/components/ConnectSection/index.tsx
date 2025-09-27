"use client";

import React from 'react'
import Shuffle from './SuffleText'

const ConnectSection = () => {
    return (
        <div className='w-full h-screen bg-[#0a0a0a] flex justify-center items-center'>
            <div className='w-full h-3/4 overflow-hidden flex flex-row items-center justify-between'>
                <video
                    src='/assets/bitcoin.mp4'
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-2/4 h-full object-cover border-r-2 opacity-40 bg-black'
                />
                <Shuffle
                    className='text-white font-major-mono text-6xl'
                    loop={true}
                    loopDelay={2.5}
                    text="Let's Create Something Innovative"
                    shuffleDirection="right"
                    duration={0.75}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                />
            </div>
        </div>
    )
}

export default ConnectSection