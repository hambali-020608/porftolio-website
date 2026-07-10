import { LanguageProvider } from "../context/LanguageContext";
import "../index.css"; 

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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}