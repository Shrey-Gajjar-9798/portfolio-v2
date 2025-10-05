'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: any; // Replace 'any' with a specific type if known
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({i, title, description, src, url, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className="h-screen pt-[30vh] max-md:pt-[20vh] flex items-center justify-center sticky top-0 px-4 max-sm:px-2">
      <div className='bg-gradient-to-bl from-cyan-900 to-[#024b90] via-syan-700 absolute w-[300px] h-[300px] blur-[200px] max-md:w-[200px] max-md:h-[200px] max-sm:w-[150px] max-sm:h-[150px]'></div>
      <motion.div 
        style={{
          // backgroundColor: color, 
          scale, 
          top: `calc(-25% + ${i * 25}px)`,
        
        }} 
        className="flex flex-col max-sm:justify-center relative h-[500px] w-[1000px] max-lg:w-[800px] max-md:w-full max-sm:h-[500px] rounded-[25px] p-[50px] max-md:p-[30px] max-sm:p-[20px] origin-top bg-gradient-to-br from-[#00000034] to-[#ffffff24] via-[#1d1d1d5c] backdrop-blur-[120px]" 
      >
        <h2 className="text-center m-0 text-[28px] max-md:text-[24px] max-sm:text-[20px] text-white font-migra">{title}</h2>
        <div className="flex h-full mt-[50px] max-md:mt-[30px] max-sm:mt-[20px] gap-[50px] max-md:gap-[30px] max-sm:gap-[20px] max-md:flex-col">
         
          <div className="relative w-[60%] max-md:w-full h-full max-sm:h-[250px] rounded-[25px] max-sm:rounded-[15px] overflow-hidden">
            <motion.div
              className="w-full h-full"
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/projects/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

         <div className="w-[40%] max-md:w-full relative top-[10%] max-md:top-0">
            <p className="text-base max-md:text-[14px] max-sm:text-[12px] first-letter:text-[28px] max-md:first-letter:text-[24px] max-sm:first-letter:text-[20px] text-white">{description}</p>
            <span className="flex items-center gap-[5px] max-sm:gap-[3px] mt-4">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs max-sm:text-[10px] underline cursor-pointer text-white hover:text-gray-300 transition-colors">
                See more
              </a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-sm:w-4 max-sm:h-2">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="white"/>
              </svg>
            </span>
          </div>
      </motion.div>

    </div>
  )
}

// const Card: React.FC<CardProps> = ({ i, title, description, src, url, progress, range, targetScale }) => {
//   const container = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'start start']
//   });

//   const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
//   const scale = useTransform(progress, range, [1, targetScale]);



//   return (
//     <div className="h-screen flex items-center justify-center sticky top-0" ref={container}>
//         <div className='bg-gradient-to-bl from-cyan-900 to-[#024b90] via-syan-700 absolute  w-[300px] h-[300px] blur-[200px] '></div>
//       <motion.div
//         className="flex flex-col relative h-[500px] w-[1000px] max-md:w-full max-md:flex-col backdrop-blur-[120px] rounded-[25px] p-[50px] max-sm:p-[20px] bg-gradient-to-br from-[#00000076] to-[#ffffff24] via-[#1d1d1d90] "
//         style={{ scale, top: `calc(-5vh + ${i * 25}px)`}}
//       >
//         <h2 className="text-center m-0 text-[28px] text-white font-migra max-sm:text-[20px]">{title}</h2>
//         <div className="flex h-full mt-[50px] gap-[50px] max-sm:mt-[20px] max-sm:gap-[20px] flex-col sm:flex-row">
//           <div className="w-[40%] max-md:w-full relative top-[10%] max-sm:top-0">
//             <p className="text-[16px] first-letter:text-[28px] first-letter:font-title max-sm:text-[14px] max-sm:first-letter:text-[20px] max-sm:text-white">{description}</p>
//             <span className="flex items-center gap-[5px] max-sm:gap-[2px]">
//               <a href={url} className="text-[18px] max-sm:text-white underline cursor-pointer max-sm:text-[10px]">view details</a>
//               <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
//               </svg>
//             </span>
//           </div>
  
//           <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden max-sm:w-full">
//             <motion.div style={{ scale: imageScale }} className="w-full h-full">
//               <Image
//                 fill
//                 src={`/projects/${src}`}
//                 alt="image"
//                 className="object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>

//     </div>
//   );
// }

export default Card