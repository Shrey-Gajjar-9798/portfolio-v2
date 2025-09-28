"use client";
import React from 'react'
import DomeGallery from './SkillsGallery'
import { SKILLS_AND_TOOLS } from '../constants/skilsList';

export type ImageItem = string | { src: string; alt?: string };

const Skills = () => {
    return (<>
        <div className='w-full flex justify-center'>
            <p className='text-4xl w-2/4 font-bold text-[#ffffffcb]'>
                My Go-To Stack for Building Secure and Scalable Applications
            </p>
        </div>
        <div className='w-full h-screen'>
            <DomeGallery
                images={SKILLS_AND_TOOLS}
            />
        </div>
    </>
    )
}

export default Skills