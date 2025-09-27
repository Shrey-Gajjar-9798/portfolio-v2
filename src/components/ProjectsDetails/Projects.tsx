"use client"
import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { useScroll, useTransform, motion, useMotionValue, MotionValue } from "framer-motion";
import { projectData } from "./ProjectData";
import Lenis from "lenis";

type Project = {
  title: string;
  description: string;
  link: string;
  src: string;
};

type CardProps = Project & {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

const ProjectFlow = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  useEffect(() => {
    if (window.innerWidth < 600) {
      return;
    }

    const lenis = new Lenis()



    function raf(time: number) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

  })


  const vantaRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative" ref={container}>
      <div className="sticky top-0 flex justify-center grayscale left-0 w-full h-screen ">
        <div className='w-full flex flex-row justify-between pt-20'>
          <div>
            <p className='font-major-mono text-8xl transform scale-y-150 ml-10'>Projects/</p>
          </div>
          <div className='max-w-xl  mr-10'>
            <p className=''>With the combination of my passion for blockchain and ethereum development I'm able to push the boundaries in my craft.</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 justify-center items-center w-full h-screen z-50 pointer-events-none">
          <div
            ref={vantaRef}
            className=" relative w-full h-[100vh] z-50 pointer-events-none"
          ></div>
        </div>
      </div>
      {projectData.map((project, i) => {
        const targetScale = 1 - ((projectData.length - i) * 0.05);
        return <Card key={`p_${i}`} i={i} title={project.title} description={project.description} link={project.link} src={project.image} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
      })}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ i, title, description, src, link, progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 36);
      cursorY.set(e.clientY - 36);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const cardElement = container.current;

    if (cardElement) {
      cardElement.addEventListener("mousemove", moveCursor);
      cardElement.addEventListener("mouseenter", handleMouseEnter);
      cardElement.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (cardElement) {
        cardElement.removeEventListener("mousemove", moveCursor);
        cardElement.removeEventListener("mouseenter", handleMouseEnter);
        cardElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [cursorX, cursorY]);

  return (
    <div className="h-screen  flex justify-center sticky top-0" ref={container}>
      <motion.div
        className="flex flex-col relative h-[500px] w-[1000px] max-md:w-full max-md:flex-col backdrop-blur-2xl rounded-[25px] p-[50px] max-sm:p-[20px]"
        style={{ scale, top: `calc(-5vh + ${i * 25}px)`, background: "linear-gradient(30deg, rgba(255,255,255,0.7), rgba(5,5,5,0.1))" }}
      >
        <h2 className="text-center m-0 text-[28px] text-white font-migra max-sm:text-[20px]">{title}</h2>
        <div className="flex h-full mt-[50px] gap-[50px] max-sm:mt-[20px] max-sm:gap-[20px] flex-col sm:flex-row">
          <div className="w-[40%] max-md:w-full relative top-[10%] max-sm:top-0">
            <p className="text-[16px] first-letter:text-[28px] first-letter:font-title max-sm:text-[14px] max-sm:first-letter:text-[20px] max-sm:text-white">{description}</p>
            <span className="flex items-center gap-[5px] max-sm:gap-[2px]">
              <a href={link} target="_blank" className="text-[18px] max-sm:text-white underline cursor-pointer max-sm:text-[10px]">view details</a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
              </svg>
            </span>
          </div>

          <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden max-sm:w-full">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image
                fill
                src={src}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

export default ProjectFlow;