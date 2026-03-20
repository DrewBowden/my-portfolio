export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-24 border-b border-slate-200">
      <p className="text-sky-500 text-sm font-mono mb-2 tracking-widest uppercase">About Me</p>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Who I am</h2>
      <div className="max-w-2xl text-slate-500 text-lg leading-relaxed space-y-4">
        <p>
          I'm a Junior Software Developer at Adrian Flux Insurance Services,
          where I've spent the last 3.5 years building and maintaining
          business-critical internal tools — from recruitment systems to
          high-traffic intranet pages used across the business every day.
        </p>
        <p>
          I started out in customer service and taught myself to code in my own
          time, which led to an internal move into the dev team. That
          self-driven attitude hasn't stopped — I'm currently completing a
          part-time BSc in Computing & IT at the Open University alongside work,
          and working through a full-stack web development bootcamp.
        </p>
        <p>
          Outside of work I enjoy building computers, working on side projects,
          and writing — always finding new ways to keep learning.
        </p>
      </div>
    </section>
  );
}