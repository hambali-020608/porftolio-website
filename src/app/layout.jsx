import { LanguageProvider } from "../context/LanguageContext";
import "../index.css"; 
import Providers from "../components/providers";

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
    <html lang="en">
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