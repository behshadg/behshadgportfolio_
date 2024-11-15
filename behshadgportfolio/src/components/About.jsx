import React from 'react';

const About = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="py-16 rounded-md bg-cyan-800 w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-center">
              <p className="text-4xl font-bold border-b-4 border-cyan-500">
                About Me
              </p>
            </div>
            <div>
              <p className="text-lg">
                Hi, I&apos;m Behshad Ghassemi. Welcome to my portfolio! I&apos;m
                a passionate web developer with a keen interest in crafting
                elegant and user-friendly web applications.
              </p>
              <p className="text-lg mt-4">
                With a strong foundation in UI/UX design principles, I strive to
                create visually appealing and intuitive interfaces that enhance
                the user experience. I have experience working with various
                technologies such as React, NextJS, Tailwind, Node.js, and
                MongoDB just to name a few to develop responsive and scalable
                web solutions. I&apos;m a quick learner and a team player who
                thrives in collaborative environments. I&apos;m always eager to
                learn new technologies and stay up-to-date with the latest
                industry trends.
              </p>
              <p className="text-lg mt-4">
                Outside of coding, I enjoy exploring new technologies,
                collaborating with fellow developers, and continuously expanding
                my skill set. I&apos;m committed to delivering high-quality work
                and thrive in dynamic and collaborative environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
