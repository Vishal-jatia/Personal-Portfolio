import Link from "next/link";
import { Zen_Dots } from "next/font/google";
import { motion } from "framer-motion";
import Graph from "./Graph.jsx"

const zen = Zen_Dots({
  subsets: ["latin-ext"],
  variable: "--font-zen",
  weight: "400",
});

const HomeTiles = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-4 gap-3 my-5 w-full">
      <motion.div
        className="row-span-4 rounded-2xl border p-2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.5,
          delay: 0.05,
        }}
      >
        <Link href="/" className={`${zen.variable} font-zen`}>
          <h3 className="border-2 rounded-full px-4 inline">Latest project</h3>
        </Link>
      </motion.div>
      <motion.div
        className="row-span-3 rounded-2xl p-2 bg-[#CAFFBF]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <Link href="/" className={`text-black font-medium rounded-full `}>
          <h3
            className={`border-2 border-black rounded-full px-4 inline ${zen.variable} font-zen`}
          >
            About me
          </h3>
          <p className="text-black ml-2 border-t-2 mt-5 pt-3 border-black mx-10">
            Hey everyone! You are visiting the official portfolio of Vishal
            Jatia, who is a software developer from Delhi, India. Developing
            websites has been a passion for him and has been developing since
            2021. He is also interested in machine learning and have
            participated in many hackathons. He is a very active learner and is
            always on the journey to learn new technologies.
          </p>
        </Link>
      </motion.div>
      <motion.div
        className="row-span-2 rounded-2xl p-2 bg-[#FFD972]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.5,
          delay: 0.15,
        }}
      >
        <Link
          href="/"
          className={`text-black font-medium rounded-full  ${zen.variable} font-zen`}
        >
          <h3 className="border-2 border-black rounded-full px-4 inline">
            Skills
          </h3>
          <Graph className="font-inter"/>
        </Link>
      </motion.div>
      <motion.div
        className="row-span-2 rounded-2xl p-2 bg-[#9BF6FF]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.5,
          delay: 0.15,
        }}
      >
        <Link
          href="/"
          className={`text-black font-medium rounded-full  ${zen.variable} font-zen`}
        >
          <h3 className="border-2 border-black rounded-full px-4 inline">
            Contact me
          </h3>
        </Link>
      </motion.div>
      <motion.div
        className="row-span-1 rounded-2xl p-2 bg-[#F08080]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.1,
          delay: 1,
        }}
      >
        <Link href="/" className={`text-black font-medium rounded-full mb-5 `}>
          <h3
            className={`border-2 border-black rounded-full px-4 inline ${zen.variable} font-zen`}
          >
            Titles
          </h3>
          <div className="text-black ml-2 border-t-2 mt-5 pt-3 border-black mx-10">
            <p>Full Stack Web Developer</p>
            <p>UI / UX Designer</p>
            <p>Machine Learning</p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default HomeTiles;
