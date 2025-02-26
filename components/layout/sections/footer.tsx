import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import info from "@/info.json";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Image
              src="/images/Crevo.png"
              alt="Crevo Logo"
              width={80}
              height={80}
            />
            <Link href="#" className="flex font-bold items-center">
              <h3 className="text-2xl">{info["comp-name"]}</h3>
            </Link>
          </div>


          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
          
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="https://www.instagram.com/crevozone" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>

            <div>
              <Link href="https://in.linkedin.com/company/crevozone" className="opacity-60 hover:opacity-100">
                Linkedin
              </Link>
            </div>

          
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Powered by
            <Link
              target="_blank"
              href="https://novanextech.vercel.app/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
             Novanex Technologies
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
