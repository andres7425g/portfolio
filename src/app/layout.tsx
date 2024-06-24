import "@/styles/custom.scss";
import "@/styles/global.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fabio Andres Manrique - Portafolio",
  description: "Fabio Andres Manrique - Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={`${inter.className}`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
