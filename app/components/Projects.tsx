const projects = [
  {
    title: "Recruitment Management System",
    description:
      "Full end-to-end applicant tracking system built from scratch. Ingests JSON application data and gives recruitment staff a complete workflow — from application through to onboarding. Handles interview scheduling with live calendar integration, automatically adjusts availability based on staff bookings and holidays, and sends automated emails and texts to candidates. Replaced a previously paper-based process entirely.",
    tags: ["Perl", "JavaScript", "MySQL", "HTML", "CSS"],
  },
  {
    title: "Internal Helpdesk Ticketing System",
    description:
      "Built from scratch — users can raise tickets, attach files, hold threaded conversations with technicians, with automated replies throughout.",
    tags: ["Perl", "JavaScript", "MySQL"],
  },
  {
    title: "Automated Reporting Pipelines",
    description:
      "Perl and MySQL pipelines delivering daily, weekly, and monthly dashboards to stakeholders — fully automated, no manual effort required.",
    tags: ["Perl", "MySQL"],
  },
  {
    title: "Intranet Page Migration",
    description:
      "Led a database migration project, authoring Perl scripts to migrate, validate, and test hundreds of intranet pages ahead of a full system transition.",
    tags: ["Perl", "MySQL"],
  },
  {
    title: "VDU Assessment Rebuild",
    description:
      "Rebuilt VDU assessment pages for office, home, and hybrid workers — migrating from Bootstrap 3 and legacy code to Bootstrap 5.3 with a modernised UI.",
    tags: ["Bootstrap", "JavaScript", "HTML", "CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-24 border-b border-white/10">
      <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">Projects</p>
      <h2 className="text-3xl font-bold text-white mb-10">Things I've built</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all">
            <h3 className="text-white font-semibold text-lg mb-2">
              {project.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-indigo-400/70">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
