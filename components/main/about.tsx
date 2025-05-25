import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutYusuf = () => {
  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10">

      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm <span className="text-blue-400 font-semibold">Yusuf</span> – a passionate tech enthusiast currently pursuing my B.Tech (2nd year) at Dr. RMLA University. I also hold a Diploma in Computer Science Engineering. <br /><br />
          I have real-world experience working as a Full Stack Developer using MERN & .NET MVC. My interests lie in Web Development, DevOps, and strengthening my DSA skills with C++. <br /><br />
          This site reflects my journey and projects. I'm always open to collaborating and learning more in the tech world. Let’s build something great together!
        </p>
        
                                
      </div>

      {/* Image Section with cloud bubble */}
      <div className="md:w-1/2 relative flex justify-center items-center">
        {/* Cloud-style speech bubble */}
        <div className="absolute top-4 left-4 bg-white text-black px-5 py-3 rounded-full shadow-lg text-sm md:text-base max-w-xs">
          <p>🧑‍💻 "When I said I wanted to work on my personal brand, I didn’t think it meant fixing CSS at 3AM." 🌙</p>

          {/* Bubble "tail" dots */}
          <div className="absolute -bottom-2 left-6 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute -bottom-4 left-9 w-2.5 h-2.5 bg-white rounded-full"></div>
          <div className="absolute -bottom-6 left-11 w-2 h-2 bg-white rounded-full"></div>
        </div>

        {/* Yusuf Image */}
        <Image
          src="/yuzs.png"
          alt="Yusuf profile"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutYusuf;
