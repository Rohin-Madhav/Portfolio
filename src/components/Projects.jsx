import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Full-stack shopping platform built with React, Node.js, and MongoDB.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "My personal portfolio using React and Tailwind.",
      link: "#",
    },
    {
      title: "Inventory System",
      desc: "Backend API for managing products and orders using Express.js.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_50%,#3b82f615,transparent)]"></div>
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">Featured Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 
              transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold text-white mb-4 relative">{p.title}</h3>
              <p className="text-gray-300 mb-6 relative">{p.desc}</p>
              <a
                href={p.link}
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-2 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
