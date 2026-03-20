export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 border-b border-slate-200">
      <p className="text-sky-500 text-sm font-mono mb-4 tracking-widest uppercase">
        Hi, my name is
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
        Drew Bowden
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
        Junior Software Developer
      </h2>
      <p className="text-slate-500 max-w-xl text-lg leading-relaxed mb-10">
        I build and maintain business-critical internal systems at a leading UK
        insurance company. 3.5 years of professional experience in Perl,
        JavaScript, and MySQL — with a focus on automation and tools that save
        real time.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-medium transition-colors">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-3 border border-slate-300 hover:border-sky-400 text-slate-600 rounded-lg font-medium transition-colors">
          Get In Touch
        </a>
      </div>
    </section>
  );
}