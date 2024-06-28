"use client";
import "@/styles/page.scss";
import MainLayout from "@/layout/MainLayout";
import HeaderSection from "@/organisms/HeaderSection";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import AboutMeSection from "@/organisms/AboutMeSection";
import SkillSection from "@/organisms/SkillSection";
import ProjectSection from "@/organisms/ProjectSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { theme, setTheme } = useTheme();
  if (typeof window !== "undefined" && mounted) {
    setTheme(theme ?? "light");
  }

  if (!mounted) {
    return null;
  }
  return (
    <main>
      <MainLayout>
        <HeaderSection />
        <AboutMeSection />
        <SkillSection />
        <ProjectSection />
      </MainLayout>
    </main>
  );
}
