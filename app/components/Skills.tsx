const skills = [
  "Perl", "JavaScript", "MySQL", "HTML", "CSS",
  "Bootstrap", "Python (learning)", "Git", "Next.js",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-24 border-b border-white/10">
      <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">Skills</p>
      <h2 className="text-3xl font-bold text-white mb-10">Tech I work with</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm font-mono hover:border-indigo-500/50 hover:text-indigo-300 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
