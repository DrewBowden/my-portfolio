export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 border-b border-white/10">
      <p className="text-indigo-400 text-sm font-mono mb-4 tracking-widest uppercase">
        Hi, my name is
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Drew Bowden
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-white/40 mb-6">
        Junior Software Developer
      </h2>
      <p className="text-white/60 max-w-xl text-lg leading-relaxed mb-10">
        I build and maintain business-critical internal systems at a leading UK
        insurance company. 3.5 years of professional experience in Perl,
        JavaScript, and MySQL — with a focus on automation and tools that save
        real time.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-3 border border-white/20 hover:border-white/50 text-white/80 rounded-lg font-medium transition-colors">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
