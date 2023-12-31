import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Navabar from "@/components/Navabar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navabar/>
        <div className="mt-16  top-10">
        {children}
        </div>
       
        </body>
    </html>
  );
}
