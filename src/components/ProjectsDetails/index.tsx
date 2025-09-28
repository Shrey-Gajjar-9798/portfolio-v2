"use client";

import React from 'react'
import ScrollVelocity from '../HomeSection/MotionScroll'
import Projects from './Projects';
import ProjectFlow from './Projects';

const ProjectDetails = () => {
    return (
        <div>
            <div className='my-36 -z-30 bg-transparent'>
                <ScrollVelocity
                    texts={['Transformative • Impact-Driven • Cutting-Edge • Decentralized • Smart •', 'Scalable • Secure • Efficient • Reliable • Optimized • Future-Ready']}
                    velocity={50}
                    className="custom-scroll-text text-5xl text-[#fff9] "
                />
            </div>
            {/* project section */}
            {/* <ProjectFlow /> */}
        </div>
    )
}

export default ProjectDetails