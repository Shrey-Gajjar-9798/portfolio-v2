"use client";
import React from 'react'
import ScrollVelocity from '../HomeSection/MotionScroll'

const Scrolltext = () => {
    return (
        <div className='my-28 bg-transparent'>
            <ScrollVelocity
                texts={['Transformative • Impact-Driven • Cutting-Edge • Decentralized • Smart •', 'Scalable • Secure • Efficient • Reliable • Optimized • Future-Ready']}
                velocity={50}
                className="custom-scroll-text text-5xl text-[#fff9] "
            />
        </div>
    )
}

export default Scrolltext