const skills = [
  "Perl", "JavaScript", "MySQL", "HTML", "CSS",
  "Bootstrap", "Python (learning)", "Git", "Next.js",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-24 border-b border-slate-200">
      <p className="text-sky-500 text-sm font-mono mb-2 tracking-widest uppercase">Skills</p>
      <h2 className="text-3xl font-bold text-slate-900 mb-10">Tech I work with</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-mono hover:border-sky-400 hover:text-sky-500 transition-colors shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}