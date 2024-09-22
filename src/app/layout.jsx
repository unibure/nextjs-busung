'use client';

import { usePathname } from 'next/navigation';
import { Orbitron , Teko } from "next/font/google";
import localFont from 'next/font/local';
import "./default.css";
import "./globals.css";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";


const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: '--ff-primary',
});

const orbitron = Orbitron({
  styles: ["normal"],
  subsets: ["latin"],
  variable: '--ff-secondary',
});

const teko = Teko({
  styles: ["normal"],
  subsets: ["latin"],
  variable: '--ff-tertiary'
})


export default function RootLayout({ children}) {

  const path = usePathname();
  const currentPath = path === '/' ? 'main' : 'subpage';


  return (
    <html lang="en" className="main">
      <body className={`${pretendard.variable} ${orbitron.variable} ${teko.variable} ${currentPath}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
