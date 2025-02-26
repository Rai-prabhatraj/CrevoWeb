import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

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
      "Monitor students’ coding progress across multiple platforms in real-time with automated leaderboards and in-depth analytics",
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
      "Showcase your institute’s top performers and achievements, attracting better opportunities and partnerships.",
  },
  {
    icon: "Sparkle",
    title: "Personalized Dashboards for Students",
    description:
      "Provide students with easy access to coding resources, performance tracking, and contest updates in one place.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered Insights for Smarter Talent Management
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Leverage AI-driven analytics to track student performance, identify
            top talent, and enhance placements with data-backed decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
