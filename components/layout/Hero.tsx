"use client";

import Link from "next/link";
import { Button } from './Button';
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  // For creating animated particles in the background
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; }[]>([]);

  
  useEffect(() => {
    // Generate random particles for the tech background effect
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 1,
          duration: Math.random() * 15 + 10
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
  }, []);
  
  return (
    <section className='bg-secondarygray min-h-screen md:min-h-fit lg:min-h-screen w-screen flex justify-center relative px-6 md:px-12 overflow-hidden'>
        {/* Tech particles floating in background */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-950 opacity-20 z-0"
            initial={{ 
              left: `${particle.x}%`, 
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              top: [`${particle.y}%`, `${(particle.y + 20) % 100}%`, `${particle.y}%`],
              left: [`${particle.x}%`, `${(particle.x + 15) % 100}%`, `${particle.x}%`],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        <motion.img 
          src='/images/swirl1.png' 
          className='absolute left-0 top-0 z-10'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.img 
          src='/images/swirl2.png' 
          className='absolute right-0 top-0 z-10'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        <div className='w-full max-w-[1400px] flex flex-col'>
            <div className='flex items-center justify-center flex-col mt-28 md:mt-32 z-20'>
                <motion.h1 
                  className='font-poppins font-semibold text-3xl md:text-[3rem] lg:text-[3rem] text-center leading-[1.2] md:leading-[62px] max-w-md md:max-w-2xl lg:max-w-4xl'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Simplifying Collaboration for Tech Students
                </motion.h1>
                
                <motion.p 
                  className='font-poppins text-xs md:text-[20px] max-w-2xl text-center mt-4 md:leading-[1.2]'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  The easiest and fastest way to connect with teammates, mentors, and hackathon organizers globally, ensuring seamless communication and team management.
                </motion.p>
              
                <motion.div 
                  className='flex flex-col md:flex-row items-center gap-2 mt-7'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className='text-[#9A9A9A] text-xs md:text-md italic'>Trusted by 1000+ students</p>
                    <img src='/images/avatars.png' className='md:scale-[0.8]'/>
                </motion.div>
            </div>

            <div className='z-20 w-full h-[420px] md:h-[520px] flex items-end md:items-start justify-center lg:justify-between relative overflow-hidden'>
            <img 
  src='/images/globe.png' 
  className='scale-x-[1.5] md:scale-100 w-full absolute bottom-0 md:bottom-0 lg:top-0 left-[50%] translate-x-[-50%] z-10' 
/>


                
                {/* Animated globe dots */}
                <motion.div 
                  className="absolute w-full h-full top-0 left-0 opacity-40"
                  animate={{ 
                    background: [
                      "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 8%)",
                      "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 8%)",
                      "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 8%)"
                    ] 
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div
                  className='hidden lg:flex items-center gap-5 z-30 mt-32'
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div 
                      className='w-[252px] h-[164px] rounded-lg bg-primarygray p-4'
                      whileHover={{ scale: 1.03, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <img src='/images/card-send.png' className='' />
                        <p className='text-black text-sm leading-[21px] font-medium mt-3'>
                        Connect effortlessly with teammates, mentors, and organizers from around the world.
                        </p>
                    </motion.div>
                    <motion.img 
                      src='/images/arrow3.png'
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
                
                <motion.div 
                  className='mt-12 z-30'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                    <motion.img 
                      src='/images/device.png'
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>
                
                <motion.div
                  className='hidden lg:flex items-center gap-5 z-30 mt-16'
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.img 
                      src='/images/arrow2.png'
                      animate={{ x: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className='w-[252px] h-[164px] rounded-lg bg-primarygray p-4'
                      whileHover={{ scale: 1.03, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <img src='/images/empty-wallet-add.png' className='' />
                        <p className='text-black text-sm leading-[21px] font-medium mt-3'>
                        Easily add nearby tech-enthusiasts to your connection.
                        </p>
                    </motion.div>
                </motion.div>

                <div className='w-full h-[80px] md:h-[180px] from-secondarygray via-[rgba(249, 250, 255, 0.9)] to-[rgba(249, 250, 255, 0.5)] absolute bottom-0 left-0 z-40 bg-gradient-to-t' />
                
                {/* Data connection lines animation */}
                <motion.div 
                  className="absolute w-full h-full"
                  style={{
                    background: "radial-gradient(circle at center, transparent 0%, transparent 100%)",
                    backgroundSize: "cover"
                  }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-blue-600"
                      style={{
                        height: "1px",
                        width: `${Math.random() * 30 + 20}%`,
                        left: `${Math.random() * 60 + 20}%`,
                        top: `${Math.random() * 60 + 20}%`,
                        opacity: 0.2,
                        rotate: `${Math.random() * 360}deg`,
                      }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        width: [`${Math.random() * 30 + 20}%`, `${Math.random() * 40 + 30}%`, `${Math.random() * 30 + 20}%`],
                      }}
                      transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero;