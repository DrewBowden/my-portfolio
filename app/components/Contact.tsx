export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-24">
      <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">Contact</p>
      <h2 className="text-3xl font-bold text-white mb-4">Get in touch</h2>
      <p className="text-white/60 max-w-md text-lg leading-relaxed mb-8">
        Open to new opportunities, collaborations, or just a chat about tech.
        Feel free to reach out.
      </p>
      <a href="mailto:drewbowdenmedia@gmail.com" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors">
        Say Hello
      </a>
    </section>
  );
}