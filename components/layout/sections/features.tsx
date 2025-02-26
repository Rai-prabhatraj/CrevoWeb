import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "AI-Powered Skill & Performance Analytics",
    description:
      "Advanced AI-driven algorithms analyze coding patterns, problem-solving efficiency, and language proficiency to provide deep insights into student capabilities.",
  },
  {
    icon: "BadgeCheck",
    title: "Real-Time Coding Progress Dashboard",
    description:
      "A personalized dashboard aggregates coding stats, submissions, accuracy rates, and rankings, giving students & institutes a comprehensive coding portfolio.",
  },
  {
    icon: "Goal",
    title: "Automated Hackathon & Contest Aggregation",
    description:
      "Students get access to multiple coding contests, hackathons, and challenges from leading platforms—all in one place, ensuring continuous competitive learning.",
  },
  {
    icon: "PictureInPicture",
    title: "Smart Referral & Placement System",
    description:
      "Crevozone enables institutes to identify top performers and directly refer them to companies, backed by data-driven performance metrics.",
  },
  {
    icon: "MousePointerClick",
    title: "AI-Powered Student Performance Analytics",
    description:
      "Get real-time, data-driven insights into student performance, coding efficiency, and progress across multiple platforms like LeetCode, CodeChef, and HackerRank.",
  },
  {
    icon: "Newspaper",
    title: "Placement-Ready Talent Identification",
    description:
      "Identify top-performing students using AI-driven metrics and directly connect them with hiring companies, boosting placement rates.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Empowering students and institutes with AI-driven insights, real-time
        tracking, and automated placement solutions.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border border-gray-200 shadow-md p-6 rounded-lg">
              <CardHeader className="flex flex-col items-start space-y-4">
                <div className="bg-primary/20 p-3 rounded-full ring-8 ring-primary/10">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={28}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-left text-lg font-semibold">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-left text-gray-600 leading-relaxed">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
