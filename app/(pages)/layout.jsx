import { Inter } from "next/font/google";
import '@/(pages)/_styles/globals.scss';
import { LanguageProvider } from "./_contexts/language";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "#include",
  description: "Leads Onboarding 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={inter.className}>{children}</body>
      </LanguageProvider>
    </html>
  );
}