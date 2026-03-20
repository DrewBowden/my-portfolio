const projects = [
  {
    title: "Recruitment Management System",
    description: "Full end-to-end applicant tracking system with automated email & SMS notifications, new starter onboarding, and full hiring workflow management.",
    tags: ["Perl", "JavaScript", "MySQL", "HTML", "CSS"],
    link: "#",
  },
  {
    title: "Internal Helpdesk Ticketing System",
    description: "Built from scratch — users can raise tickets, attach files, hold threaded conversations with technicians, with automated replies throughout.",
    tags: ["Perl", "JavaScript", "MySQL"],
    link: "#",
  },
  {
    title: "Automated Reporting Pipelines",
    description: "Perl and MySQL pipelines delivering daily, weekly, and monthly dashboards to stakeholders — fully automated, no manual effort required.",
    tags: ["Perl", "MySQL"],
    link: "#",
  },
  {
    title: "Intranet Page Migration",
    description: "Led a database migration project, authoring Perl scripts to migrate, validate, and test hundreds of intranet pages ahead of a full system transition.",
    tags: ["Perl", "MySQL"],
    link: "#",
  },
  {
    title: "VDU Assessment Rebuild",
    description: "Rebuilt VDU assessment pages for office, home, and hybrid workers — migrating from Bootstrap 3 and legacy code to Bootstrap 5.3 with a modernised UI.",
    tags: ["Bootstrap", "JavaScript", "HTML", "CSS"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-24 border-b border-slate-200">
      <p className="text-sky-500 text-sm font-mono mb-2 tracking-widest uppercase">Projects</p>
      <h2 className="text-3xl font-bold text-slate-900 mb-10">Things I've built</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a key={project.title} href={project.link} className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-sky-400 hover:shadow-md transition-all">
            <h3 className="text-slate-900 font-semibold text-lg mb-2 group-hover:text-sky-500 transition-colors">
              {project.title} →
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-sky-500">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}