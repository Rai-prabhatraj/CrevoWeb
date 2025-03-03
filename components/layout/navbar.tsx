"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import info from "@/info.json";

// Type definitions for better code integrity
interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon for features
}

// Navigation routes - moved outside component for cleanliness
const ROUTES: RouteProps[] = [
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

// Feature list - moved outside component for cleanliness
const FEATURES: FeatureProps[] = [
  {
    "title": "Track Student Progress",
    "description": "Monitor coding performance across multiple platforms with real-time analytics."
  },
  {
    "title": "Enhance Institutional Insights",
    "description": "AI-powered dashboards provide deep analysis of student skills and growth."
  },
  {
    "title": "Empower Career Opportunities",
    "description": "Connect top-performing students with industry leaders through direct referrals."
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavClose = () => setIsOpen(false);

  return (
<header className="sticky top-5 z-40 mx-auto w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl rounded-xl border border-secondary bg-card bg-opacity-15 py-0.5 px-3 shadow-sm flex justify-between items-center h-15"> 
      <Link href="/" className="flex items-center font-bold text-lg">
        <Image
          src="/images/Crevo.png"
          alt={`${info["comp-name"]} Logo`}
          width={70}
          height={70}
          className="mr-2"
        />
        <span className="hidden md:block">{info["comp-name"]}</span>
      </Link>

      {/* Mobile Menu */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl border-secondary bg-card"
          >
            <div>
              <SheetHeader className="mb-6 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/images/Crevo.png"
                      alt={`${info["comp-name"]} Logo`}
                      width={80}
                      height={80}
                    />
                    <span className="ml-2 text-lg font-bold">{info["comp-name"]}</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-4">
                {ROUTES.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={handleMobileNavClose}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
                
                {/* Features in mobile menu */}
                <Button
                  onClick={handleMobileNavClose}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href="#features">Features</Link>
                </Button>
              </nav>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-4" />
              <Button 
                asChild 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="#schedule-demo">Schedule Demo</Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-base font-medium">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[650px] grid-cols-2 gap-6 p-6 bg-card rounded-xl shadow-lg">
                <ul className="flex flex-col gap-3">
                  {FEATURES.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm transition-colors hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col justify-center p-6 bg-muted/50 rounded-lg">
                  <h3 className="mb-2 text-lg font-semibold">Why Choose Us</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Our platform empowers institutes with real-time student performance tracking, AI-driven insights & seamless hackathon integration. Personalized dashboards help students & faculty stay ahead, while direct industry referrals connect top talent with leading companies.
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="mt-2 self-start"
                  >
                    <Link href="#learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {ROUTES.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link 
                  href={href} 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Schedule Demo Button for Desktop */}
      <div className="hidden lg:flex">
        <Button 
          asChild 
          className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-4"
        >
          <Link 
  href="https://calendly.com/prabhatrajrai4" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Schedule Demo
</Link>
        </Button>
      </div>
    </header>
  );
};