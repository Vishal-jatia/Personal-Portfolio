'use client'
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Contact = () => {

  return (
    <div className={`${inter.variable} group`}>
      <p className="font-inter my-4">
        Building digital experiences from front-end to back-end. Let's
        collaborate and create something extraordinary.
      </p>
      <div className="font-inter my-5">
        <p className=" font-bold text-xl">Reach me out via</p>
        <h3>
          Mail: <span>vjatia449@gmail.com</span>
        </h3>
        <Link
          className="flex items-end hover:text-blue-500 w-52 justify-between border-b mt-3"
          href="https://www.linkedin.com/in/vishal-jatia-638146229/"
        >
          LinkedIn
          <Image
            src="/icons/Arrow-circle.svg"
            alt="arrow"
            width={25}
            height={25}
          />
        </Link>
        <Link
          className="flex items-end hover:text-blue-500 w-52 justify-between border-b"
          href="https://www.instagram.com/v._.i_s_h_a_l/"
        >
          Instagram
          <Image
            src="/icons/Arrow-circle.svg"
            alt="arrow"
            width={25}
            height={25}
          />
        </Link>
        <Link
          className="flex items-end hover:text-blue-500 w-52 justify-between border-b"
          href="https://github.com/Vishal-jatia"
        >
          Github
          <Image
            src="/icons/Arrow-circle.svg"
            alt="arrow"
            width={25}
            height={25}
          />
        </Link>
      </div>
      <div className="border rounded-full mt-1">
        <div className="bg-gray-800 group-hover:bg-gray-100 group-hover:text-black rounded-full px-3  m-1 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 text-white flex gap-2 justify-center duration-1000 ease-in-out items-center">
          <h3>NAMASTE!</h3>
          <Image
            src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784638/public/images/hands_atb5ap.png"
            alt="contact-me"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact