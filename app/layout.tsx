import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Next.js Fullstack Blog",
  description: "Next.js Rest API + MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " w-full min-h-screen flex flex-col justify-between "
        }
      >
        {children}
        <ul className="hidden md:flex mt-auto mb-10 mx-auto  flex-col justify-center items-center text-slate-400">
          <li>NEXT.js RESTful API + server actions + SSG</li>
          <li>Prisma + MongaDB</li>
          <li>Tailwind</li>
          <li className="mx-auto">
            learned from Nikhil (IndianCoders),
            <span className=" whitespace-nowrap "> powered by greybluesea</span>
          </li>
        </ul>
      </body>
    </html>
  );
}
