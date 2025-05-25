"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/about"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/selfpic.jpg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin r2 shrink-0"
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-white to-yellow-400">
             <b> Yusuf Iqbal</b> 
            </span>

          
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          <a href="">
            <Image
              src="/discord.svg"
              alt="discord Logo"
              width={24}
              height={24}
              className="shrink-0"
            />
          </a>
          <a href="https://github.com/Yusufiqbal15">
            <Image
              src="/github1.png"
              alt="github Logo"
              className=" shrink-0"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.linkedin.com/in/yusuf-iqbal-971686259/">
            <Image
              src="/linkedin.png"
              alt="linkedin Logo"
              width={24}
              height={24}
              className="shrink-0"
            />
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014ee] backdrop-blur-md z-50 flex flex-col items-center py-4 gap-4">
          <a href="#about-me" className="text-gray-200" onClick={() => setMobileMenuOpen(false)}>
            About me
          </a>
          <a href="#skills" className="text-gray-200" onClick={() => setMobileMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="text-gray-200" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </a>
          <div className="flex flex-row gap-5 mt-2">
            <a href="">
              <Image
                src="/discord.svg"
                alt="discord Logo"
                width={24}
                height={24}
                className="shrink-0"
              />
            </a>
            <a href="https://github.com/Yusufiqbal15">
              <Image
                src="/github.png"
                alt="github Logo"
                className="icnr shrink-0"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.linkedin.com/in/yusuf-iqbal-971686259/">
              <Image
                src="/linkedin.png"
                alt="linkedin Logo"
                width={24}
                height={24}
                className="shrink-0"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
