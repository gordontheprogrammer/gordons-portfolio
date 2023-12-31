import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "SCSS" },
  { skill: "Django" },
  { skill: "Redux" },
  { skill: "PostgreSQL"},
  { skill: "MongoDB" },
  { skill: "Docker" }


]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl hover:-translate-y-1 transition-transform cursor-pointer">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-600 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Gordon and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Chicago, IL.
            </p>
            <br />
            <p>
              I started my Software Devlopment journey back in 2018 during college, in my
              pursuit of an Associates Of Science in Computer Science. In 2019
              I decided to place my studies on hold to pursue other opportunities.
              I never stopped pursing knowledge in feild, I began to buy books, courses
              and Ive attended two coding bootcamps(Hack-Reactor & App Academy).
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, watching sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-blue-600">
                never stop growing
              </span>{" "}
              and
              {" "}<span className="font-bold text-blue-600">
              hardwork + effort beats talent{" "}
            </span> and that&#39;s what I strive to do everyday, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold transition-colors duration-300 ease-in-out transform cursor-pointer hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
