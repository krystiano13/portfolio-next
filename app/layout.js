import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: "--font-other" });
const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-head" });

//components
import { Background } from "@/app/components/Background";
import { Navbar } from "@/app/components/Navbar/Navbar";

export const metadata = {
  title: 'Krystian Zieja',
  description: 'Krystian Zieja - web developer portfolio website',
  authors: [
    { name: "Krystian Zieja", url: "https://github.com/krystiano13" }
  ],
  keywords: ['Krystian', 'Zieja', 'Frontend', 'Backend', 'Fullstack', 'Web', 'developer']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className} box-border overflow-x-hidden`}>
      <Navbar />
      <Background />
      {children}
      </body>
    </html>
  )
};
