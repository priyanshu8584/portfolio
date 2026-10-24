import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStackStream } from "@/components/TechStackStream";
import { MetricsShowcase } from "@/components/MetricsShowcase";
import { SkillsArchitecture } from "@/components/SkillsArchitecture";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { ContactFooter } from "@/components/ContactFooter";

export default function PortfolioHomePage() {
  return (
    <div className="relative min-h-screen bg-obsidian-950 text-zinc-100">
      <Navbar />
      <main>
        <HeroSection />
        <TechStackStream />
        <MetricsShowcase />
        <SkillsArchitecture />
        <ProjectsShowcase />
      </main>
      <ContactFooter />
    </div>
  );
}
