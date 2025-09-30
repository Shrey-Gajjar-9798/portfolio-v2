"use client";

import React from 'react'
import Shuffle from './SuffleText'
import Image from 'next/image';
import Link from 'next/link';
import ScrollVelocity from '../HomeSection/MotionScroll';

const ConnectSection = () => {
    return (
        <>
            <div className='w-full overflow-hidden flex items-center h-screen'>
                <ScrollVelocity
                    texts={[`  Let's Work together  `]}
                    velocity={100}
                    className="custom-scroll-text font-space text-9xl text-[#fff9] "
                />
            </div>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='w-full h-3/4 overflow-hidden flex flex-row items-center justify-between'>
                    <video
                        src='/assets/bitcoin.mp4'
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='w-2/4 h-full object-cover border-r-2 opacity-40 bg-black'
                    />
                    <div className='flex flex-col items-center'>
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
                        <div className='flex mt-3'>
                            <div className='bg-white mx-2 rounded-xl'>
                                <Link href={'https://github.comhttps://github.com/Shrey-Gajjar-9798'}>
                                    <Image src="/icons/github.svg" alt="github" width={30} height={30} className='m-1 hover:scale-110 transition-transform cursor-pointer' />
                                </Link>
                            </div>
                            <div className='bg-white mx-2 rounded-xl'>
                                <Link href={'mailto:shrey.eth@gmail.com'}>
                                    <Image src="/icons/gmail.svg" alt="gmail" width={30} height={30} className='m-1 hover:scale-110 transition-transform cursor-pointer' />
                                </Link>
                            </div>
                            <div className='bg-white mx-2 rounded-xl'>
                                <Link href={'https://medium.com/@shrey97'}>
                                    <Image src="/icons/medium.svg" alt="medium" width={30} height={30} className='m-1 hover:scale-110 transition-transform cursor-pointer' />
                                </Link>
                            </div>
                            <div className='bg-white mx-2 rounded-xl'>
                                <Link href={'https://x.com/Shrey_gajjar_'}>
                                    <Image src="/icons/x.svg" alt="x" width={30} height={30} className='m-1 hover:scale-110 transition-transform cursor-pointer' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectSection