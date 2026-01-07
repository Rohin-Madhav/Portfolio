import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const contentRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.set([".greeting-badge", ".greeting-text", ".main-name", ".title-text", ".description-text", ".cta-button"], {
        opacity: 0
      });

      // Create main timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      // Page fade in
      tl.from(sectionRef.current, {
        opacity: 0,
        duration: 0.5
      });

      // Background blob animation
      tl.from(".bg-blob", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      }, "-=0.3");

      // Greeting badge with bounce
      tl.to(".greeting-badge", {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=1");

      // Greeting text
      tl.to(".greeting-text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, "-=0.4");

      // Main name with dramatic entrance
      tl.to(".main-name", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }, "-=0.5");

      // Title text
      tl.to(".title-text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, "-=0.6");

      // Description
      tl.to(".description-text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, "-=0.4");

      // Buttons with stagger
      tl.to(".cta-button", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.4)",
      }, "-=0.3");

      // Add floating animation to name
      gsap.to(".main-name", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2
      });

      // Animate tech keywords
      gsap.to(".tech-highlight", {
        color: "#60a5fa",
        duration: 1,
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative snap-start  flex flex-col justify-center items-center min-h-screen text-center px-4 bg-gray-900 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_800px_at_50%_-10%,rgba(59,130,246,0.08),transparent)]"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-blob absolute w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse top-1/3 left-1/4"></div>
        <div className="bg-blob absolute w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl animate-pulse bottom-1/4 right-1/4"></div>
      </div>

      {/* Animated content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl"
      >
        {/* Greeting badge */}
        <div className="greeting-badge inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-gray-800 rounded-full transform scale-75 translate-y-[-20px]">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-400 font-medium">
            Available for opportunities
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="greeting-text block text-gray-500 text-2xl md:text-3xl font-normal mb-2 translate-y-[30px]">
            Hi, I'm
          </span>
          <span className="main-name block text-white translate-y-[50px]">Rohin Madhav</span>
          <span className="title-text block text-gray-400 text-3xl md:text-5xl mt-4 translate-y-[40px]">
            Full Stack Developer
          </span>
        </h1>

        {/* Description */}
        <p className="description-text text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed translate-y-[30px]">
          Crafting seamless digital experiences with cutting-edge technologies.
          <br className="hidden md:block" />
          Specialized in{" "}
          <span className="tech-highlight text-blue-400 font-medium">React</span>,{" "}
          <span className="tech-highlight text-blue-400 font-medium">Node.js</span>, and{" "}
          <span className="tech-highlight text-blue-400 font-medium">Modern Web Design</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="cta-button group px-8 py-4 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-600/30 hover:scale-105 translate-y-[30px] scale-90"
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="cta-button px-8 py-4 border border-gray-700 rounded-lg font-semibold text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 translate-y-[30px] scale-90"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="cta-button  mt-16 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-gray-600 animate-bounce">
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}