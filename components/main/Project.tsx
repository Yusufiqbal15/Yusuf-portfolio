// SimpleProjects.jsx
import React from "react";
import Image from "next/image";
import Carditem from "../sub/carditem";
import Carditem2 from "../sub/carditem2";
import Carditem3 from "../sub/carditem3";
import Carditem4 from "../sub/carditem4";

const projects = [
  {
    img: "/project1.jpg",
    title: "Yuzs-Ai Career Coach",
    github: "https://github.com/Yusufiqbal15/Yuzs-ai15",
    live: "https://yuzs-ai.vercel.app",
    desc:
      "Yuzs-AI Career Coach is your smart companion for career growth, skill building, and job readiness. It guides students and professionals with personalized, AI-powered support for resumes, interviews, and career planning.",
    tags: <Carditem />,
  },
  {
    img: "/charity.jpg",
    title: "Charity & Hope Foundation",
    github: "https://github.com/Yusufiqbal15/Charity-Hope-Foundation",
    live: "https://charity-hope-foundation.vercel.app/",
    desc:
      "Charity & Trust Foundation is a digital solution to efficiently track, manage, and report student attendance. It streamlines attendance processes for administrators.",
    tags: <Carditem2 />,
  },
  {
    img: "/court.jpg",
    title: "Ayodhya Court Case Management System",
    github: "https://github.com/Yusufiqbal15/jansunwayi-portal-app-71",
    live: "https://jansunwayi-portal-ayodhya.vercel.app/",
    desc:
      "A Court Case Management System is a software that helps courts digitally manage, track, and process legal cases efficiently.",
    tags: <Carditem4/>,
  },
  {
    img: "/project4.png",
    title: "E-Commerce Store",
    github: "https://github.com/Yusufiqbal15/10MIN-ZEPTO",
    live: "https://yusuf-cams.vercel.app",
    desc:
      "E-Commerce Store is a digital platform for browsing, purchasing, and managing products online. It offers a seamless shopping experience with secure payments, product search, and order tracking.",
    tags: <Carditem3 />,
  },
];

const SimpleProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center " id="projects">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 w-full max-w-7xl">
        {projects.map((project, idx) => (
          <div key={idx} className="rounded-lg shadow-md border border-purple-700 w-full flex flex-col">
            <Image
              src={project.img}
              alt={project.title}
              width={500}
              height={350}
              className="rounded-t-lg w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                <div className="flex items-center gap-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-20 relative inline-block icnr"
                  >
                    <Image
                      src="/github1.png"
                      alt="github"
                      className="shrink-0 cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-20 relative inline-block"
                  >
                    <Image
                      src="/live.png"
                      alt="Live Project"
                      className="shrink-0 cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
              <p className="text-gray-300 mt-2">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">{project.tags}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleProjects;
