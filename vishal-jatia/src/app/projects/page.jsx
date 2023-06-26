"use client";
import projects from "./projects.js";
import { Inter } from "next/font/google";
import Link from "next/link.js";
import Image from "next/image.js";
import { motion } from "framer-motion";
// import Slider from "../../components/Slider.jsx"
import Contact from "@/components/contact.jsx";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const page = () => {
  // const settings = {
  //   dots: true,
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <main className={`min-h-screen ${inter.variable} my-10 mx-2`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "easeIn",
            duration: 0.5,
          }}
          className="rounded-3xl row-span-1 relative w-full h-40 md:h-56 "
        >
          <Image
            src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784641/public/images/projects_buyo4s.png"
            alt="project"
            fill={true}
            className="object-cover rounded-3xl"
          />
          <div className="absolute bottom-1 ml-4 block w-full">
            <h2 className="bg-white w-fit rounded-full px-3 text-black">
              Web Development
            </h2>
            <div className="border rounded-full mr-10 mt-1">
              <h3 className="bg-gray-400 rounded-full px-3  m-1 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100">
                Innovation
              </h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "easeIn",
            duration: 0.5,
            delay: 0.15,
          }}
          className="row-span-1  "
        >
          <h2 className="mt-10 ml-5">Vishal Jatia</h2>
          <div className="pt-10 border-t mb-5 mx-4 border-dotted flex flex-row justify-between items-end">
            <h1 className="text-5xl">Projects</h1>
            <Image
              src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784639/public/images/image1_kdiiov.png"
              alt="pic"
              width={70}
              height={70}
              className="mr-5 bg-gray-700 border bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-full p-2"
            />
          </div>
        </motion.div>
        {projects.map((project) => {
          return (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "easeIn",
                duration: 0.5,
                delay: 0.15,
              }}
              key={project.key}
              className="font-inter border rounded-3xl p-5 group/all"
            >
              <figure className="w-full h-56 relative rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
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
                <h2 className="font-bold text-3xl mt-3">{project.name}</h2>
                <h3 className="border rounded-full text-xs w-fit opacity-90 px-3 mt-1 mb-3">
                  {project.type}
                </h3>
              </div>
              <p className="my-5">{project.description}</p>
              <div className="flex bg-gray-100 rounded-full justify-between py-1 px-5 max-w-[90%] mx-auto">
                {project.techStack.map((link) => {
                  return (
                    <Image
                      src={link}
                      alt="icon"
                      width={40}
                      height={40}
                      className=""
                    />
                  );
                })}
              </div>
              {project.liveLink !== "" ? (
                <div className="flex gap-1">
                  <Link
                    href={project.codeLink}
                    className="border pt-10 rounded-3xl w-[50%] mt-5 group/link flex items-end justify-center pb-2"
                  >
                    <div className="flex w-full items-center justify-between mx-5 md:mx-10 border-b mb-5">
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
                  <Link
                    href={project.liveLink}
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
                </div>
              ) : (
                <div className="flex gap-1">
                  <Link
                    href={project.codeLink}
                    className="border pt-10 rounded-3xl w-full mt-5 group/link flex items-end justify-center pb-2"
                  >
                    <div className="flex w-full items-center justify-between mx-5 md:mx-10 border-b mb-5">
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
                  <Link
                    href="/projects"
                    className="border hidden pt-10 rounded-3xl w-[50%] mt-5 group disabled:text-gray-500 cursor-not-allowed"
                  >
                    <div className="flex items-center justify-between mx-5 md:mx-10 border-b border-gray-500 mb-5">
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
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </main>
  );
};

export default page;
