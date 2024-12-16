'use client';
import Image from 'next/image';
import { Github, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'Nike',
      description: 'Full Responsive Nike website',
      tags: ['Nextjs', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/nihalkhann/giaic-nike-hackathon',
      demo: 'https://nihal-nike--pi.vercel.app/',
      picture: '/peakpx (1).jpg',
    },
    {
      title: 'Resume Builder',
      description:
        'A web app using HTML, CSS, TypeScript, and JavaScript to create and download professional resumes as PDFs. Simple, efficient, and user-friendly',
      tags: ['HTML', 'CSS', 'TypeScript', 'JavaScript'],
      github: 'https://github.com/nihalkhann/resume-builder-milstone-5-GIAIC',
      demo: 'https://nihal-resume-builder.vercel.app/',
      picture: '/resume .jpeg',
    },
    {
      title: 'CLI ATM ',
      description: 'Command line interface ATM machine',
      tags: ['TypeScript', 'JavaScript'],
      github: 'https://github.com/nihalkhann/atm_cli_typescript',
      demo: 'https://www.npmjs.com/package/nihal_atm',
      picture: '/atm.jpeg',
    },
    {
      title: 'CLI Todo list ',
      description: 'Todo list application on Command line interface',
      tags: ['TypeScript', 'JavaScript'],
      github: 'https://github.com/nihalkhann/todo_list_CLI',
      demo: 'https://www.npmjs.com/package/nihal11_todo-list',
      picture: '/todo.jpeg',
    },
    {
      title: 'CLI Number Guessing Game',
      description: 'Number guessing game 0 to 6 on Command Line Interface',
      tags: ['TypeScript', 'JavaScript'],
      github: 'https://github.com/nihalkhann/cli-number-guessing-game',
      demo: 'https://www.npmjs.com/package/nihalkhan-cli-number-guessing-game',
      picture: '/game.jpeg',
    },
    {
      title: 'CLI Calculator',
      description: 'Fully functional Calculator Command Line Interface',
      tags: ['TypeScript', 'JavaScript'],
      github: 'https://github.com/nihalkhann/simple-calculator-',
      demo: 'https://www.npmjs.com/package/nihal-calculator',
      picture: '/calculator_.jpeg',
    },
    {
      title: 'CLI Word Counter',
      description: 'Number Counter on Command Line Interface',
      tags: ['TypeScript', 'JavaScript'],
      github: 'https://github.com/nihalkhann/word_counter_cli',
      demo: 'https://www.npmjs.com/package/nihal_word-counter',
      picture: '/count.webp',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-gray-300 font-bold mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" bg-gray-950 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <Image
                  src={project.picture}
                  alt={project.title}
                  className="rounded-lg items-center"
                  width={300}
                  height={200}
                ></Image>
                <h3 className="text-xl text-gray-300 mt-3 font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <LinkIcon size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
