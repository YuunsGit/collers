import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/utils/cn";
import Footer from "@/components/footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collers Collection",
  description:
    "Sneaker collection of Collers. A collection of sneakers that will make you feel like you're walking on air.",
  metadataBase: new URL("https://collers.yunusemre.dev"),
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
      sizes: "any",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#78350F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          roboto.className,
          "bg-white md:bg-[linear-gradient(0deg,rgba(255,255,255,1)0%,rgba(255,251,235,1)100%)]",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
