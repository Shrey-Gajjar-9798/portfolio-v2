"use client";

import React from 'react'
import ScrollVelocity from '../HomeSection/MotionScroll'
import Projects from './Projects';
import ProjectFlow from './Projects';

const ProjectDetails = () => {
    return (
        <div className='w-full mt-24 min-h-screen'>
            <div className='w-full flex flex-row max-sm:flex-col max-sm:justify-center  justify-between pt-20 '>
                <div>
                    <p className='font-major-mono text-8xl max-sm:text-[50px] transform scale-y-150 max-sm:scale-y-120 max-sm:justify-center max-sm:flex max-sm:my-20 max-sm:ml-0 ml-10'>Projects/</p>
                </div>
                <div className='max-w-xl max-sm:text-center mr-10 max-sm:mr-0 max-sm:px-2'>
                    <p className=''>With the combination of my passion for blockchain and ethereum development I&apos;m able to push the boundaries in my craft.</p>
                </div>
            </div>
            {/* project section */}
            <div className='w-full min-h-screen relative'>
                <ProjectFlow />
            </div>
        </div>
    )
}

export default ProjectDetails