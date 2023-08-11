import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Munro Go",
    description:
      "Led a team of 4 talented engineers and built a robust full stack application prioritizing scalablity integrating numerous asynchrous API fetches, User authentication.",
    image: "/MunroGo.png",
    github: "https://gitlab.com/elijahram/munro-go",
    link: "https://gitlab.com/elijahram/munro-go",
  },
  {
    name: "365 Autos Shop",
    description:
      "Freelance Developed a website for a dealership based in Chicago.",
    image: "/365auto.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "Conference Go",
    description: "Conference Go is an event tracking application that prodives users with a intuitive UI, achieved using React Js + React Hooks for asynchronous API integration, Django w/ Python for backend",
    image: "/conferenceGo.jpeg",
    github: "https://gitlab.com/warrenhill7/fearless-frontend",
    link: "https://gitlab.com/warrenhill7/fearless-frontend",
  },
  {
    name: "PathFinder Algorithm Visualizer",
    description: "PathFinder Algorithm Visualizer is a MVP project I developed as I began to study DSA to showcase my interest in algorithm design.",
    image: "/pathfinder.png",
    github: "https://github.com/gordontheprogrammer/algorithm-visualizer",
    link: "https://github.com/gordontheprogrammer/algorithm-visualizer",
  },

]

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl hover:-translate-y-1 transition-transform cursor-pointer">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-600 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectSection
