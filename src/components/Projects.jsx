import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Projects() {
  const container = useRef(null);
  const cardsRef = useRef([])


  const projects = [
    {
      title: "Health Care System",
      desc: "A healthcare management system that handles appointments, doctor records, and patient data.",
      link: "https://health-care-system-1-yzp8.onrender.com",
    },
    {
      title: "Football Academy",
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

  useGSAP(() => {
    const headingSplit = new SplitText(".heading h2", {
      type: "chars"
    });

    gsap.from(headingSplit.chars, {
      scrollTrigger: {
        trigger: ".heading h2",
        start: "top 85%",
        once: true,
      },
      y: 40,
      opacity: 0,
      stagger: 0.03,
      ease: "power3.out",

    });
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        once: true,
      },
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "all",
    });


    ScrollTrigger.refresh();

  }, { scope: container });


  return (
    <section
      ref={container}
      id="projects"
      className="  min-h-screen py-24 px-6 bg-gray-950 relative overflow-hidden"
    >


      <div className="max-w-6xl Featured Projects  mx-auto text-center relative z-10">
        <div
          className="text-4xl  heading md:text-5xl font-bold mb-16"
        >
          <h2 className="text-white">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <div
              key={p.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 
                transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-indigo-400 transition-colors duration-300">
                {p.title}
              </h3>

              <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                {p.desc}
              </p>

              <a
                href={p.link}
                className="relative z-10 inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                  View Project
                </span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
              </a>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}