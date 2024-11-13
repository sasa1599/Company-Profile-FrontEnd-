import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Kebun Koe Agricore",
  description: "Fresh Product From Us to You",
  icons:"/Logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
