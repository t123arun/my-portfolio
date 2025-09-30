export default function AboutSection() {
  return (
    <section className="py-16" id="about">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2"></div>
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-subtext-light dark:text-subtext-dark mb-4">
            I am a dedicated and results-oriented MERN stack developer with 3+
            years of experience in building and maintaining web applications. My
            expertise lies in creating scalable and efficient solutions that
            meet business requirements and provide exceptional user experiences.
          </p>
          <p className="text-subtext-light dark:text-subtext-dark">
            I am passionate about staying up-to-date with the latest
            technologies and continuously improving my skills. Let's build
            something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}
