"use client";
import Image from "next/image";
import { Zen_Dots } from "next/font/google";
import { Inter } from "next/font/google";
import HomeTiles from "@/components/HomeTiles";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const zen = Zen_Dots({
  subsets: ["latin-ext"],
  variable: "--font-zen",
  weight: "400",
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center overflow-x-hidden p-2 ${inter.variable} font-inter`}
    >
      <motion.div
        className="bg-[#BDB2FF] rounded-2xl w-full"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.5,
        }}
      >
        <div className="p-3 sm:p-20 flex flex-col-reverse items-start gap-5 md:flex-row sm:items-center justify-between">
          <div className="px-3 sm:px-0">
            <h1
              className={`${zen.variable} font-zen text-5xl sm:text-5xl md:text-7xl lg:text-9xl`}
            >
              Vishal Jatia
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:gap-10 items-start sm:items-center text-xs sm:text-base">
              <button className="border-2 text-base rounded-full p-5 py-2 w-full sm:w-fit flex items-center justify-between gap-5">
                <h4>Web Developer</h4>
                <Image
                  src="/icons/Arrow-circle.svg"
                  alt="arrow"
                  width={30}
                  height={30}
                />
              </button>
              <p className="text-slate-100 px-2">NSUT, Dwarka</p>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784640/public/images/laptop_mem_kvbq0d.png"
            alt="my memoji"
            width={200}
            height={200}
            className="rounded-full bg-black scale-75 lg:scale-100"
          />
        </div>
      </motion.div>

      <HomeTiles />
    </main>
  );
}
