"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is this platform designed for?",
    answer:
      "Our platform helps you connect with teammates, collaborate on hackathons, and manage educational projects seamlessly. We offer skill-based team matching, real-time collaboration tools, and project management for educational and professional needs.",
    value: "item-1",
  },
  {
    question: "How does the skill-based matching feature work?",
    answer:
      "The platform uses an intelligent algorithm to suggest teammates whose skills complement yours, ensuring effective collaboration for your projects or hackathons.",
    value: "item-2",
  },
  {
    question: "Can I use this platform for academic and professional projects?",
    answer:
      "Yes! Our platform supports both academic and professional collaborations, whether for hackathons, study groups, or professional project teams.",
    value: "item-3",
  },
  {
    question: "How does the AI-powered teammate matching work?",
    answer:
      "Our AI analyzes user profiles, skills, availability, and project needs to recommend teammates, ensuring a well-balanced and effective team.",
    value: "item-4",
  },
];

export const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("faq");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container md:w-[700px] py-24 sm:py-32"
    >
      {/* Header with Floating Effect */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-lg text-primary text-center mb-2 tracking-wider"
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          FAQS
        </motion.h2>

        <motion.h2
          className="text-3xl md:text-4xl text-center font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Common Questions
        </motion.h2>
      </motion.div>

      {/* FAQ Accordion with Scroll Effects */}
      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }, index) => (
          <motion.div
            key={value}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
          >
            <AccordionItem key={value} value={value}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95, y: -2 }}
                className="text-left"
              >
                <AccordionTrigger>{question}</AccordionTrigger>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AccordionContent>{answer}</AccordionContent>
              </motion.div>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.section>
  );
};
