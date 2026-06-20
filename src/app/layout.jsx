import { LanguageProvider } from "../context/LanguageContext";
import "../index.css";
import "../App.css";
import "aos/dist/aos.css";

export const metadata = {
  title: "My Portfolio",
  description: "Web Portfolio of Hambali Subastian",
  icons:'/soltech.jpeg'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
