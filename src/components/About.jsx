import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(SplitText)

export default function About() {
  const container = useRef()

useGSAP(() => {
  // Heading animation (This part is fine)
  const headingSplit = new SplitText(".heading h2", { type: "chars,words" });
  gsap.from(headingSplit.chars, {
    yPercent: 100,
    duration: 1.2,
    ease: "back.out(1.7)",
    stagger: 0.02,
  });

  // FIX: Target ".feature-item" (the blocks we just labeled)
  gsap.from(".feature-item", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out"
  });
}, { scope: container });
  return (
    <section id="about" ref={container} className="py-24  snap-start min-h-screen px-6 bg-gray-900 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,#3b82f608,transparent)]"></div>

      <div className="  max-w-5xl mx-auto relative">
        {/* Section header */}
        <div className=" heading heading mb-16">
          <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Building Digital Experiences
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Image/Visual element */}
          <div className="relative">
            <div className="aspect-square feature-items  from-blue-600/10 to-gray-800/50 rounded-2xl border border-gray-800 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      Full Stack Developer
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      Available for Work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="parah space-y-6 ">
            <div>
              <p className="text-gray-300 feature-item  leading-relaxed text-lg">
                I am a Full Stack Developer focused on building modern, scalable, and user-friendly web applications. I work with both frontend and backend technologies to deliver reliable, high-performance solutions from concept to deployment.
              </p>
            </div>

            <div className="space-y-4 parah">
              <div className="feature-item flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center  mt-0.5">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Modern Stack</h3>
                  <p className="text-gray-400 text-sm">Specializing in React, Node.js, and Tailwind CSS for building scalable applications.</p>
                </div>
              </div>

              <div className="feature-item flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">User-Focused Design</h3>
                  <p className="text-gray-400 text-sm">Creating intuitive interfaces that prioritize user experience and accessibility.</p>
                </div>
              </div>

              <div className="flex feature-item items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center  mt-0.5">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Continuous Learning</h3>
                  <p className="text-gray-400 text-sm">Always exploring new technologies and best practices in web development.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600/10 border border-blue-500/30 rounded-lg">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-blue-400 font-medium">Open for freelance collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}