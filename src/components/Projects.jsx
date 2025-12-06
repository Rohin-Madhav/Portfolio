import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
 const projects = [
  {
    title: "MERN CRM System",
    desc: "A full-stack CRM platform built with React, Node.js, and MongoDB to manage clients, deals, and analytics.",
    link: "https://mern-crm-frontend-gi9o.onrender.com",
  },
  {
    title: "Personal Task Manager",
    desc: "A task management web app with user authentication, task tracking, and CRUD functionality using MERN stack.",
    link: "https://personal-task-manager-cvpq.onrender.com",
  },
  {
    title: "Health Care System",
    desc: "A healthcare management system that handles appointments, doctor records, and patient data.",
    link: "https://health-care-system-1-yzp8.onrender.com",
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio using React and Tailwind.",
    link: "https://rohin-portfolio.netlify.app", 
  },
];


  return (
    <section id="projects" className="py-24 px-6 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_50%,#3b82f615,transparent)]"></div>
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-4xl font-bold mb-12">
          <span className=" from-indigo-500 to-blue-500 text-transparent bg-clip-text">Featured Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 
              transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 relative overflow-hidden"
            >
              <div className="absolute inset-0  from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold text-white mb-4 relative">{p.title}</h3>
              <p className="text-gray-300 mb-6 relative">{p.desc}</p>
              <Link
                href={p.link}
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-2 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
