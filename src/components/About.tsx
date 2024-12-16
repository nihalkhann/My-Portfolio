import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl text-gray-300 text-center font-bold mb-8">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex justify-center mx-auto max-w-xs sm:max-w-md">
            <Image 
              src="/ai1.jpeg" 
              alt="Profile" 
              width={350} 
              height={350}
              className="rounded-xl w-full h-auto object-cover" 
            />
          </div>
          <div className="text-base sm:text-lg text-center md:text-left">
            <p className="text-gray-300 mb-6">
              I am a passionate developer and aspiring <strong className="text-blue-600">Cloud Applied Generative AI Engineer</strong>, currently advancing my skills through the <strong className="text-blue-600">Governor Sindh IT Initiative</strong>. My focus lies in leveraging cutting-edge generative AI technologies to create innovative solutions in the cloud domain. I thrive on solving complex problems, exploring new technologies, and contributing to impactful projects that drive innovation and efficiency.
            </p>
          
            <p className="text-gray-300">
              When I&apos;m not coding, you can find me learning new technologies and contributing
              to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;