import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "@/components/ui/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "tlynx538 - Portfolio",
  description: "Vinayak Jaiwant's Portfolio Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
