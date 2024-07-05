import React from 'react';
import resumePDF from '../../assets/Ghassemi_B_Resume.pdf';
import certPDF from '../../assets/Fullstack.pdf';

const Resume = () => {
  return (
    <div id="resume" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
            Resume & Certfication
          </p>
        </div>
        <div className="w-full flex justify-center">
          <iframe
            src={resumePDF}
            type="application/pdf"
            className="w-full h-[500px] border-none"
          />
        </div>
        <a href="https://plum-camilla-20.tiiny.site/" target="_blank">
          Click to download CV
        </a>
        <div className="w-full flex justify-center">
          <iframe
            src={certPDF}
            type="application/pdf"
            className="w-full h-[300px] border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
