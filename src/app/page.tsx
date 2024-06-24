"use client";
import "@/styles/page.scss";
import MainLayout from "@/layout/MainLayout";
import HeaderSection from "@/organisms/HeaderSection";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import AboutMeSection from "@/organisms/AboutMeSection";

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
      </MainLayout>
    </main>
  );
}
