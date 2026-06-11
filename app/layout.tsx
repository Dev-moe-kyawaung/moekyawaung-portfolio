import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MultiLanguageProvider } from "@/components/MultiLanguage";
import AnimatedCursor from "@/components/AnimatedCursor";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata = {
  title: "Moe Kyaw Aung | Senior Android Developer",
  description: "Premium cyber portfolio - Flutter Pro Max, Vue.js, Next.js"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MultiLanguageProvider>
            <div className="scanlines" />
            <AnimatedCursor />
            <ParticleBackground />
            {children}
          </MultiLanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
