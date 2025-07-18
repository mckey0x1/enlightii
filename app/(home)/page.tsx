import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DemoSection from "@/components/demo-section";
import Footer from "@/components/footer";
import { ProjectList } from "@/modules/home/ui/components/project-list";
import { Lightbulb } from "lucide-react";
import { ProjectForm } from "@/modules/home/ui/components/project-form";

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-5xl mx-auto w-full">
        <section className="space-y-6 py-[16h] 2xl:py-48">
          <div className="flex flex-col items-center">
            <Lightbulb width={50} height={50} className="hidden md:block" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Icon cluster */}

            {/* Main heading with typewriter effect */}
            <div className="w-[80%] mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-8 leading-tight">
                <span className="text-black">
                  Create apps and websites by chatting with AI
                </span>
                {/* <span className="animate-pulse text-black">|</span> */}
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-xs md:text-base text-black/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              {/* Transform your ideas into reality with the power of artificial intelligence.  */}
              Build beautiful, functional applications through natural
              conversation.
            </p>

            {/* Large Input Field */}
            <div className="max-w-3xl mx-auto mb-16">
              <ProjectForm />
            </div>
          </div>
          <ProjectList />
        </section>
      </div>
    </>
  );
}
