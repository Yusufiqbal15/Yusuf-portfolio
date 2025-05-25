// SimpleProjects.jsx
import React from "react";
import Image from "next/image";
import Carditem from "../sub/carditem";
import Carditem2 from "../sub/carditem2";
import Carditem3 from "../sub/carditem3";

const SimpleProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 " id="projects">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
        My Projects
      </h1>

      <div className="flex flex-col md:flex-row gap-6 px-6">

        {/* Project 1 */}
        <div className=" rounded-lg shadow-md border border-purple-700 w-full md:w-1/3">
          <Image src="/project1.jpg" alt="Project 1" width={500} height={350} className="rounded-t-lg w-full object-cover" />
          <div className=" p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8 ">
                <h2 className="text-2xl font-semibold text-white">Yuzs-Ai Career Coach</h2>
                <div className="flex items-center gap-1">
                   <a
                  href="https://github.com/Yusufiqbal15/Yuzs-ai15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 relative inline-block icnr "
                >
                  <Image
                    src="/github1.png"
                    alt="github "
                    className="shrink-0 cursor-pointer "
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://yuzs-ai.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 relative inline-block "
                >
                  <Image
                    src="/live.png"
                    alt="Live Project"
                    className="shrink-0 cursor-pointer "
                    width={24}
                    height={24}
                  />
                </a>
                </div>
               

              </div>
            </div>
            <p className="text-gray-300 mt-2">
             Yuzs-AI Career Coach is your smart companion for career growth, skill building, and job readiness. It guides students and professionals with personalized, AI-powered support for resumes, interviews, and career planning.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
                <Carditem/>
             </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className=" rounded-lg shadow-md border border-purple-700 w-full md:w-1/3">
          <Image src="/PROJECT3.jpg" alt="Project 2" width={500} height={350} className="rounded-t-lg w-full object-cover" />
          <div className=" p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">College Management</h2>
            <div className="flex items-center gap-1">
                   <a
                  href="https://github.com/Yusufiqbal15/YusufCAMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 relative inline-block icnr "
                >
                  <Image
                    src="/github1.png"
                    alt="github "
                    className="shrink-0 cursor-pointer "
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://yusuf-cams.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 relative inline-block "
                >
                  <Image
                    src="/live.png"
                    alt="Live Project"
                    className="shrink-0 cursor-pointer "
                    width={24}
                    height={24}
                  />
                </a>
                </div>
            </div>
            
            <p className="text-gray-300 mt-2">
             College Attendance Management System is a digital solution to efficiently track, manage, and report student attendance. It streamlines attendance processes for administrators.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Carditem2/>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className=" rounded-lg shadow-md border border-purple-700 w-full md:w-1/3">
          <Image src="/project4.png" alt="Project 3" width={500} height={350} className="rounded-t-lg w-full object-cover" />
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">E-Commerce Store</h2>
            <div className="flex items-center gap-1">
                   <a
                  href="https://github.com/Yusufiqbal15/10MIN-ZEPTO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 relative inline-block icnr "
                >
                  <Image
                    src="/github1.png"
                    alt="github "
                    className="shrink-0 cursor-pointer "
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://yusuf-cams.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 relative inline-block "
                >
                  <Image
                    src="/live.png"
                    alt="Live Project"
                    className="shrink-0 cursor-pointer "
                    width={24}
                    height={24}
                  />
                </a>
                </div>
            </div>
            
            <p className="text-gray-300 mt-2">
              E-Commerce Store is a digital platform for browsing, purchasing, and managing products online. It offers a seamless shopping experience with secure payments, product search, and order tracking.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Carditem3/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SimpleProjects;
