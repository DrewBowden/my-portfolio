export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-24">
      <p className="text-sky-500 text-sm font-mono mb-2 tracking-widest uppercase">Contact</p>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in touch</h2>
      <p className="text-slate-500 max-w-md text-lg leading-relaxed mb-8">
        Open to new opportunities, collaborations, or just a chat about tech.
        Feel free to reach out.
      </p>
      <a href="mailto:drewbowdenmedia@gmail.com" className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-medium transition-colors">
        Say Hello
      </a>
    </section>
  );
}