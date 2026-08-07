import { LanguageProvider } from "../context/LanguageContext";
import "../index.css";
import Providers from "../components/providers";
import { Orbitron, Outfit } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Hambali Subastian | Portfolio",
  description: "Web Portfolio of Hambali Subastian - Software Engineer, Data Analyst, and Cybersecurity Researcher",
  icons: {
    icon: "/soltech.jpeg",
    apple: "/soltech.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <Providers>

        <LanguageProvider>
          {children}
        </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}