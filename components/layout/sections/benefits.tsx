"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Comprehensive Student Performance Tracking",
    description:
      "Monitor students' coding progress across multiple platforms in real-time with automated leaderboards and in-depth analytics",
  },
  {
    icon: "LineChart",
    title: "Industry-Ready Talent Identification",
    description:
      "Easily identify top-performing students and refer them to leading companies, enhancing placement rates & reputation.",
  },
  {
    icon: "Wallet",
    title: "Boost Institutional Recognition",
    description:
      "Showcase your institute's top performers and achievements, attracting better opportunities and partnerships.",
  },
  {
    icon: "Sparkle",
    title: "Personalized Dashboards for Students",
    description:
      "Provide students with easy access to coding resources, performance tracking, and contest updates in one place.",
  },
];

export const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      y: -10,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { duration: 0.6 }
    }
  };
  
  const numberVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 0.15, 
      x: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      opacity: 0.5,
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };
  
  // Floating particles animation for the background
  const generateParticles = (count: number) => {
    return [...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
        style={{
          width: Math.random() * 10 + 5, 
          height: Math.random() * 10 + 5,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 50 - 25],
          y: [0, Math.random() * 50 - 25],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ));
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="benefits" 
      className="container py-24 sm:py-32 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Floating background particles */}
      {generateParticles(15)}
      
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30 dark:opacity-20 -z-10"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
            "radial-gradient(circle at 70% 60%, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
            "radial-gradient(circle at 30% 70%, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
            "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.2) 0%, transparent 70%)"
          ] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <motion.div variants={containerVariants}>
          <motion.h2 
            className="text-lg text-primary mb-2 tracking-wider"
            variants={titleVariants}
          >
            Benefits
          </motion.h2>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={titleVariants}
          >
            AI-Powered Insights for Smarter Talent Management
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            variants={titleVariants}
          >
            Leverage AI-driven analytics to track student performance, identify
            top talent, and enhance placements with data-backed decisions.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-4 w-full"
          variants={containerVariants}
        >
          {benefitList.map(({ icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all h-full backdrop-blur-sm border-primary/10">
                <CardHeader>
                  <div className="flex justify-between">
                    <motion.div variants={iconVariants} whileHover="hover">
                      <Icon
                        name={icon as keyof typeof icons}
                        size={32}
                        color="hsl(var(--primary))"
                        className="mb-6 text-primary drop-shadow-md"
                      />
                    </motion.div>
                    
                    <motion.span 
                      className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75"
                      variants={numberVariants}
                    >
                      0{index + 1}
                    </motion.span>
                  </div>

                  <CardTitle className="relative z-10">
                    {/* Animated underline on hover */}
                    <motion.span
                      className="absolute bottom-0 left-0 h-1 bg-primary/30 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    {title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground relative">
                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute -top-5 -left-5 w-12 h-12 bg-primary/5 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      times: [0, 0.5, 1]
                    }}
                  />
                  {description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10" style={{ zIndex: -1 }}>
        <motion.path
          d="M 100 100 Q 200 50, 300 120 T 500 140"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1],
            opacity: [0, 0.3, 0],
            pathOffset: [0, 0, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 300 200 Q 400 100, 500 300 T 700 400"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1],
            opacity: [0, 0.3, 0],
            pathOffset: [0, 0, 1]
          }}
          transition={{
            duration: 8,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.section>
  );
};