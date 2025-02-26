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
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
