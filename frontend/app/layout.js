import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThirdwebProvider } from "thirdweb/react";
require('dotenv').config()
import { client } from "./client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Lottery - A.A Demo",
  description: "Account Abstraction Demo",
};



export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <ThirdwebProvider>
      client={client}
      payOptions={{
        supportedTokens: {
          "1": [
            {
              address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
              name: "Universel Rand",
              symbol: "uZAR",
              icon: "...",
            },
          ],
        },
      }}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
      >
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
      </ThirdwebProvider>
    </html>
  );
}
