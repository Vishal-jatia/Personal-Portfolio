"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <motion.nav
      className="flex justify-between w-full mx-2 my-3"
      initial={false}
      animate={toggleDropdown ? "open" : "closed"}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-1">
          <Link
            href="/"
            className="border rounded-full flex justify-between items-center cursor-pointer"
            onClick={() => {
              setToggleDropdown(false);
            }}
          >
            <h2 className="ml-5 w-max mr-10 lg:mr-20">Vishal Jatia</h2>
            <p
              className={`bg-[#FF686B] rounded-full my-2 lg:my-2 px-4 mr-3 ${inter.variable} font-inter`}
            >
              Home
            </p>
          </Link>
          <div className="lg:flex gap-1 hidden bg-fixed">
            <Link
              href="/projects"
              className="border rounded-full px-1 flex justify-between items-center cursor-pointer  "
            >
              <h2 className="ml-5 w-max mr-10 lg:mr-20">Projects</h2>
              <p
                className={`bg-[#A5FFD6] text-black rounded-full px-4 my-2 mr-2 ${inter.variable} font-inter`}
              >
                20+
              </p>
            </Link>
            <Link
              href="/files/Resume.pdf"
              alt="Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-full px-1 flex justify-between items-center"
            >
              <h2 className="ml-5 w-max mr-10 lg:mr-20">Resume</h2>
              <p
                className={`bg-[#EFD9CE] text-black rounded-full px-4 my-2 mr-2 ${inter.variable} font-inter`}
              >
                Download
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex relative z-50 justify-end">
          <button
            className="border rounded-full px-1 flex justify-between items-center mr-3"
            onClick={() => {
              setToggleDropdown(!toggleDropdown);
            }}
          >
            <h2 className="ml-5 w-max mr-5 lg:mr-20">Menu</h2>
            <motion.div
              className=""
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.5, originX: 0.4 }}
            >
              <Image
                src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784631/public/icons/down-arrow_v6iasc.png"
                className="pr-1 my-2"
                alt="menu"
                width={25}
                height={25}
              />
            </motion.div>
          </button>
        </div>
        {toggleDropdown && (
          <motion.div
            className="dropdown"
            variants={{
              open: { x: 0, opacity: 1 },
              closed: { x: 100, opacity: 0 },
            }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 20,
              duration: 0.3,
            }}
          >
            <div className="flex flex-col gap-2 mt-10">
              <Link
                href="/"
                className="border rounded-full flex justify-between items-center cursor-pointer"
                onClick={() => {
                  setToggleDropdown(false);
                }}
              >
                <h2 className="ml-5 w-max mr-10 lg:mr-20">Vishal Jatia</h2>
                <p
                  className={`bg-[#FF686B] rounded-full my-2 lg:my-2 px-4 mr-3 ${inter.variable} font-inter`}
                >
                  Home
                </p>
              </Link>
              <Link
                href="/projects"
                className="border rounded-full px-1 flex justify-between items-center cursor-pointer "
                onClick={() => {
                  setToggleDropdown(false);
                }}
              >
                <h2 className="ml-5 w-max mr-10 lg:mr-20">Projects</h2>
                <p
                  className={`bg-[#A5FFD6] text-black rounded-full px-4 my-2 mr-2 ${inter.variable} font-inter`}
                >
                  20+
                </p>
              </Link>
              <Link
                href="/files/Resume.pdf"
                alt="Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-full px-1 flex justify-between items-center"
                onClick={() => {
                  setToggleDropdown(false);
                }}
              >
                <h2 className="ml-5 w-max mr-10 lg:mr-20">Resume</h2>
                <p
                  className={`bg-[#EFD9CE] text-black rounded-full px-4 my-2 mr-2 ${inter.variable} font-inter`}
                >
                  Download
                </p>
              </Link>
            </div>
            <div className="mr-5 lg:hidden flex absolute right-5 bottom-10">
              <Link
                href="https://www.instagram.com/v._.i_s_h_a_l/"
                className="border rounded-full p-3 hover:scale-105"
              >
                <Image
                  src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784631/public/icons/instagram_datbo1.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                />
              </Link>
              <Link
                href="https://github.com/Vishal-jatia"
                className="border rounded-full p-3 hover:scale-105"
              >
                <Image
                  src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784637/public/icons/github_daaho9.svg"
                  width={20}
                  height={20}
                  alt="github"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/vishal-jatia-638146229/"
                className="border rounded-full p-3 hover:scale-105"
              >
                <Image
                  src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784631/public/icons/linkedin_hrrwfy.svg"
                  width={20}
                  height={20}
                  alt="linkedin"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mr-5 lg:flex hidden">
        <Link
          href="https://www.instagram.com/v._.i_s_h_a_l/"
          className="border rounded-full p-3 hover:scale-105"
        >
          <Image
            src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784631/public/icons/instagram_datbo1.svg"
            width={20}
            height={20}
            alt="instagram"
          />
        </Link>
        <Link
          href="https://github.com/Vishal-jatia"
          className="border rounded-full p-3 hover:scale-105"
        >
          <Image src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784637/public/icons/github_daaho9.svg" width={20} height={20} alt="github" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/vishal-jatia-638146229/"
          className="border rounded-full p-3 hover:scale-105"
        >
          <Image
            src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784631/public/icons/linkedin_hrrwfy.svg"
            width={20}
            height={20}
            alt="linkedin"
          />
        </Link>
      </div>
    </motion.nav>
  );
};

export default Nav;
