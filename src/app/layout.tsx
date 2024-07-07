import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import QueryProvider from "@/components/providers/query-provider";
import { redirect } from "next/navigation";

const mainFont = localFont({
  src: "../fonts/segoe-ui-historic.ttf",
});

export const metadata: Metadata = {
  title: "Facebook",
  description: "Facebook Clone By Nguyen Phuong Duy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  redirect("https://fb-font-end.vercel.app/");
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          mainFont.className,
          "overflow-x-hidden bg-bg-1 h-screen w-full 320:w-screen"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
