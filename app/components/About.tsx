export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-24 border-b border-white/10">
      <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">About Me</p>
      <h2 className="text-3xl font-bold text-white mb-8">Who I am</h2>
      <div className="max-w-2xl text-white/60 text-lg leading-relaxed space-y-4">
        <p>
          I'm a Junior Software Developer at Adrian Flux Insurance Services,
          where I've spent six years building and maintaining business-critical
          internal tools - from recruitment systems to high-traffic intranet
          pages used across the business every day.
        </p>
        <p>
          I started out in customer service and taught myself to code in my own
          time, earning an internal move into the dev team. Outside of work I've
          independently built and launched a full-stack AI-powered web
          application with real users and Stripe payments - built entirely from
          scratch.
        </p>
        <p>
          I'm currently completing a part-time BSc in Computing & IT at the
          Open University, and always working on something new.
        </p>
      </div>
    </section>
  );
}