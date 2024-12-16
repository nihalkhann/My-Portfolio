
const Skills = () => {
  const skillCategories = [
    {
      title: "Skills",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "IT Support Professional"
      ],
    },
    
    
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-gray-400 font-bold mb-12 ">Skills</h2>
        <div className="">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-950 p-6 rounded-lg"
            >
            
              <div className="flex flex-wrap gap-6 ">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm hover:transform hover:scale-110 transition-transform duration-200 "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;