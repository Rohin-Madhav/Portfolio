import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Skills() {
  const container = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redux", icon: "🛒" },
  ];

  useGSAP(() => {
    requestAnimationFrame(() => {
      // 🔥 SplitText AFTER render
      const split = new SplitText(headingRef.current, {
        type: "chars",
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: headingRef.current,
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
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "all",
      });

      // 🔄 VERY IMPORTANT
      ScrollTrigger.refresh();
    });
  }, { scope: container });

  return (
    <section
      id="skills"
      ref={container}
      className="py-24 bg-gray-950 relative min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="mb-16 heading">
          <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">
            Tech Stack
          </span>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-white mt-2"
          >
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              ref={(el) => (cardsRef.current[i] = el)}
              className="skill-card bg-gray-900 border border-gray-800 rounded-xl p-6
                         hover:border-blue-500/50 hover:bg-gray-800/50
                         transition-all duration-300 relative"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-white font-semibold text-lg">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
