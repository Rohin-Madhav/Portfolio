import React from "react";


export default function Projects() {
  const projects = [
    {
      title: "Health Care System",
      desc: "A healthcare management system that handles appointments, doctor records, and patient data.",
      link: "https://health-care-system-1-yzp8.onrender.com",
    },
    {
      title: "Football Academy ",
      desc: "A modern football academy website showcasing training programs and player development.",
      link: "https://rmfc.netlify.app",
    },
    {
      title: "Portfolio Website",
      desc: "My personal portfolio using React and Tailwind.",
      link: "https://rohin-portfolio.netlify.app",
    },
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
      title: "Note App",
      desc: "A simple and efficient note-taking web app built with React that allows users to create, edit, and delete notes with local storage support.",
      link: "https://your-note-keeper.netlify.app",
    },
    {
      title: "Attendance Tracker",
      desc: "A web-based attendance management system developed using React and Node.js to help track daily attendance easily.",
      link: "https://tracker-attendance.netlify.app",
    },
    {
      title: "Mock Interview Platform",
      desc: "An ongoing mock interview platform designed to simulate real interview experiences and improve candidate readiness.",
      link: "#"
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
              {/* Overlay (visual only) */}
              <div className="absolute inset-0 from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                {p.title}
              </h3>

              <p className="text-gray-300 mb-6 relative z-10">
                {p.desc}
              </p>

              <a

                href={p.link}
                className="relative z-10 inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-2 transition-transform duration-300"
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
