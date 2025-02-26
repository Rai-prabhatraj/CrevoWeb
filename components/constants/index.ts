// Import necessary assets
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

// Pricing tiers
export const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

// Testimonials
export const testimonials = [
  {
    text: "Crevozone has transformed how I track my coding progress across multiple platforms. It's a game-changer!",
    imageSrc: avatar1.src,
    name: "Aaravi Mehta",
    username: "@aaravi.mehta08",
  },
  {
    text: "With Crevozone’s leaderboard, I can easily compare my coding skills with peers and push myself to improve.",
    imageSrc: avatar2.src,
    name: "Priyansh Sharma",
    username: "@priyansharma_dev",
  },
  {
    text: "This platform makes it super easy to access all hackathons and contests in one place. No more searching for opportunities!",
    imageSrc: avatar3.src,
    name: "Rahul Verma",
    username: "@rahulv_12",
  },
  {
    text: "The AI-powered resume checker helped me refine my resume and land multiple interview calls!",
    imageSrc: avatar4.src,
    name: "Mathew John",
    username: "@mathewjohn_",
  },
  {
    text: "I love how Crevozone integrates data from different coding platforms and presents a clear skill analysis.",
    imageSrc: avatar5.src,
    name: "Vikram Joshi",
    username: "@vikram_joshi",
  },
  {
    text: "Thanks to Crevozone, I got direct referrals from my college based on my coding profile. Best platform for students!",
    imageSrc: avatar6.src,
    name: "Neha Patil",
    username: "@neha.patil",
  },
  {
    text: "Managing projects and connecting with other coders has never been easier. The collaboration tools are fantastic!",
    imageSrc: avatar7.src,
    name: "Aman Gupta",
    username: "@aman.dev",
  },
  {
    text: "Crevozone helped me analyze my weak areas in coding and improve my problem-solving skills efficiently.",
    imageSrc: avatar8.src,
    name: "Sanya Kapoor",
    username: "@sanya_kapoor",
  },
  {
    text: "The insights and coding analytics from Crevozone have been instrumental in my tech career growth.",
    imageSrc: avatar9.src,
    name: "Rohan Nair",
    username: "@rohan_nair",
  },
];
