import type { Metadata } from "next";
import { Poppins, Alex_Brush } from "next/font/google";
import "./globals.css";
import { LoginContextProvider } from "./Contexts/LoginContext";

const poppins = Poppins({ 
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["300"],
  
});

const alex =Alex_Brush({
  variable: "--font-alex",
  weight:["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LoginContextProvider>
        <body
          className={`${poppins.variable} ${alex.variable} bg-secundaryBg    antialiased`}
        >
          {children}
        </body>
      </LoginContextProvider>
    </html>
  );
}
