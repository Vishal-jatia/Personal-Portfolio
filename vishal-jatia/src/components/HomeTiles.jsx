import Link from "next/link";
import Image from "next/image.js";
import { Zen_Dots } from "next/font/google";
import { motion } from "framer-motion";
import Graph from "./Graph.jsx";
import projects from "@/app/projects/projects.js";
import Contact from "./contact.jsx";

const zen = Zen_Dots({
  subsets: ["latin-ext"],
  variable: "--font-zen",
  weight: "400",
});

const HomeTiles = () => {
  const data = {
    labels: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "JQuery",
      "Tailwind",
      "NodeJs",
      "ReactJs",
      "NextJs",
      "Figma"
    ],
    data: [90, 90, 90, 80, 80, 85, 80, 75, 60, 90],
  };
  return (
    <div className="grid grid-cols-1 grid-flow-row-dense auto-cols-max lg:grid-cols-3 gap-3 my-5 ">
      <motion.div
        className="rounded-3xl border p-2 row-span-3 h-fit group/all"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.5,
          delay: 0.05,
        }}
      >
        <Link href="/" className={`${zen.variable} font-zen h-fit`}>
          <h3 className="border-2 rounded-full px-4 inline group-hover/all:bg-white group-hover/all:text-black">
            Latest project
          </h3>
          <div
            key={projects[0].key}
            className="font-inter border rounded-2xl p-5 mt-2"
          >
            <figure className="w-full h-56 relative rounded-2xl overflow-hidden">
              <Image
                src={projects[0].image}
                alt="project-img"
                fill={true}
                className="object-cover rounded-2xl group-hover/all:scale-110 duration-300 ease-in-out"
              />
              <Image
                src="/icons/Arrow-circle.svg"
                alt="arrow"
                width={50}
                height={50}
                className="group-hover/all:rotate-90 duration-500 ease-in-out absolute right-0 bg-black rounded-full"
              />
            </figure>
            <div className="border-b">
              <h2 className="font-bold text-3xl mt-3">{projects[0].name}</h2>
              <h3 className="border rounded-full text-xs w-fit opacity-90 px-3 mt-1 mb-3">
                {projects[0].type}
              </h3>
            </div>
            <p className="my-5">{projects[0].description}</p>
            <div>{/*Tech stack */}</div>
            <div className="flex gap-1">
              <Link
                href={projects[0].codeLink}
                className="border pt-10 rounded-3xl w-[50%] mt-5 group/link flex items-end justify-center pb-5"
              >
                <div className="flex w-full items-center justify-between mx-5 md:mx-10 border-b">
                  <h4>Github</h4>
                  <Image
                    src="/icons/Arrow-circle.svg"
                    alt="arrow"
                    width={30}
                    height={30}
                    className="group-hover/link:rotate-90 duration-500 ease-in-out"
                  />
                </div>
              </Link>
              {projects[0].liveLink !== "" ? (
                <Link
                  href={projects[0].liveLink}
                  className="border pt-10 rounded-3xl w-[50%] mt-5 group"
                >
                  <div className="flex items-center justify-between mx-5 md:mx-10 border-b mb-5">
                    <h4>Live Link</h4>
                    <Image
                      src="/icons/Arrow-circle.svg"
                      alt="arrow"
                      width={30}
                      height={30}
                      className="group-hover:rotate-90 duration-500 ease-in-out"
                    />
                  </div>
                </Link>
              ) : (
                <Link
                  href="/projects[0]s"
                  className="border pt-10 rounded-3xl w-[50%] mt-5 group disabled:text-gray-500 cursor-not-allowed"
                >
                  <div className="flex items-center justify-between mx-5 md:mx-10 border-b mb-5">
                    <h4>
                      Live Link{" "}
                      <span className="text-gray-500">(Coming Soon)</span>
                    </h4>
                    <Image
                      src="/icons/Arrow-circle.svg"
                      alt="arrow"
                      width={30}
                      height={30}
                      className=""
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="rounded-2xl p-2 bg-[#CAFFBF] h-fit pb-5 row-span-1 group/1"
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
            className={`border-2 border-black rounded-full px-4 inline ${zen.variable} font-zen group-hover/1:bg-white group-hover/1:text-black group-hover/1:border-white`}
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
        className="rounded-2xl p-2 bg-[#F08080] h-full pb-5 group/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.5,
          delay: 0.15,
        }}
      >
        <Link href="/" className={`text-black font-medium rounded-full mb-5 `}>
          <h3
            className={`border-2 border-black rounded-full px-4 inline ${zen.variable} font-zen group-hover/2:bg-white group-hover/2:text-black group-hover/2:border-white`}
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
      <motion.div
        className="rounded-2xl p-2 bg-[#ffd500] h-fit group/3"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <div
          className={`text-black font-medium rounded-full  ${zen.variable} font-zen  `}
        >
          <h3 className="border-2 border-black rounded-full px-4 inline group-hover/3:bg-white group-hover/3:text-black group-hover/3:border-white">
            Skills
          </h3>
          <Graph data={data}/>
        </div>
      </motion.div>
      <motion.div
        className=" rounded-2xl p-2 animate-border inline-block bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] h-fit group/4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "easeIn",
          duration: 0.5,
          delay: 0.15,
        }}
      >
        <div
          className={`text-black font-medium rounded-full  ${zen.variable} font-zen block rounded-xl bg-black px-5 py-3 h-full text-white`}
        >
          <h3 className="border-2  rounded-full px-4 inline group-hover/4:bg-white group-hover/4:text-black group-hover/4:border-white">Contact me</h3>
          <Contact />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeTiles;
