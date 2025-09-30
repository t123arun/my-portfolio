import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-slate-900">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#ffc300] tracking-tighter mb-4">
          Hi, I'm <span className="text-accent">Tarun</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-subtext-dark mb-8 text-white">
          A passionate MERN stack developer focused on creating innovative and
          user-friendly web applications. I specialize in building robust
          backends with Node.js and Express, and dynamic frontends with React.
        </p>
        <Link
          className="inline-block bg-[#ffc300] hover:bg-accent-[#ffd60a] text-primary font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
          href="/projects"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
