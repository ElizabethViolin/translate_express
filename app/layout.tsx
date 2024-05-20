import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers/themeProvider";

export const metadata: Metadata = {
  title: "Translate Express",
  description: "Welcome to Translate Express – Your ultimate tool for accurate and real-time language translation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          enableColorScheme={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
