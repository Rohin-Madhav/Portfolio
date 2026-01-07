import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redux", icon: "🛒" }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950 relative  min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
              
              {/* Hover accent */}
              <div className="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}