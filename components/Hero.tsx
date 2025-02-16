import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MagicButton } from "./ui/MagicButton";
import { FaFileDownload } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { FloatingNav } from "./ui/FloatingNav";
import { FaHome } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="Hero" className="t-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />

      {/* Grid Design */}
      <div
        id="heroContent"
        className="h-full w-full top-0  sm:flex-wrap md:justify-between dark:bg-black-100 bg-white  dark:bg-grid-white/[0.036] bg-grid-black/[0.2] relative flex items-center"
      >
        {/* Radial gradient gives grid a multidimensional look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Text */}
        <div className="flex justify-center relative -top-[15%] my-20 z-10">
          <div className="max-w-[89vw] md:max-w-6xl lg:max-w-[80wv] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-center text-sm text-blue-100 ">
              Under Construction. Built with Next.js
            </h2>
            <TextGenerateEffect
              words={`Full-Stack Developer with a Data Analyst’s Mindset`}
              className="text-center text-[40px] md:text-6xl lg:text-7xl"
            />
            <div className="text-center md:tracking-wider mb-4 text-lg md:text-lg lg:text-3xl">
              <p>Hi, I&apos;m Dhara—From Data to Development,</p>
              <p>I Build with Purpose.</p>
            </div>
            <div className="flex sm:gap-5 gap-3 lg:pt-0">
              <a
                href="https://github.com/dhara519/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="GitHub"
                  icon={<ImGithub />}
                  position="left"
                  otherClasses={""}
                />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <MagicButton
                  title="Resume"
                  icon={<FaFileDownload />}
                  position="left"
                  otherClasses={""}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/dhara-patel-7a20b9bb/"
                target="_blank"
                rel="noopener noreferrer" // for security
              >
                <MagicButton
                  title="LinkedIn"
                  icon={<FaLinkedin />}
                  position="left"
                  otherClasses={""}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
