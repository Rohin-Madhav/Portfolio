export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen text-center px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_800px_at_50%_-10%,rgba(59,130,246,0.08),transparent)]"></div>
      
      {/* Minimal floating effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse top-1/3 left-1/4"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-gray-800 rounded-full">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-400 font-medium">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="block text-gray-500 text-2xl md:text-3xl font-normal mb-2">Hi, I'm</span>
          <span className="block text-white">
            Rohin Madhav
          </span>
          <span className="block text-gray-400 text-3xl md:text-5xl mt-4">Full Stack Developer</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Crafting seamless digital experiences with cutting-edge technologies.
          <br className="hidden md:block" />
          Specialized in <span className="text-blue-400 font-medium">React</span>, <span className="text-blue-400 font-medium">Node.js</span>, and <span className="text-blue-400 font-medium">Modern Web Design</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-600/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-gray-700 rounded-lg font-semibold text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
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