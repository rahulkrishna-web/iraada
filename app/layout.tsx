import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import localFont from 'next/font/local'
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const seasons = localFont({
  src: './theSeasons.woff2',
  display: 'swap',
  variable: '--font-seasons',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={`${seasons.variable}`}>
      <head />
      <body
        className="min-h-screen bg-gradient-custom dark:bg-gray-900 font-poppins antialiased"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 bg-[#a8ca8f] dark:bg-[#78A083]">
              <p>&copy; 2024, Iraada</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
