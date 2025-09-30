export default function Experience() {
  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section id="experience">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          <div className="relative mb-12">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-highlight rounded-full border-4 border-background-light dark:border-background-dark"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right">
                <p className="font-bold text-lg text-primary">
                  Senior Software Engineer
                </p>
                <p className="text-sm text-[#0f1923]/70 dark:text-[#f5f7f8]/70">
                  Tech Solutions Inc.
                </p>
                <p className="text-sm font-medium text-highlight">
                  2021 - Present
                </p>
              </div>
              <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg shadow-md border border-primary/10">
                <p className="text-sm">
                  Led the development of scalable web applications using the
                  MERN stack. Collaborated with cross-functional teams to
                  deliver high-quality software solutions. Mentored junior
                  developers and contributed to code reviews.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mb-12">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary/60 rounded-full border-4 border-background-light dark:border-background-dark"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 md:text-left">
                <p className="font-bold text-lg text-primary">
                  Software Engineer
                </p>
                <p className="text-sm text-[#0f1923]/70 dark:text-[#f5f7f8]/70">
                  Innovatech Solutions
                </p>
                <p className="text-sm font-medium text-primary/80">
                  2019 - 2021
                </p>
              </div>
              <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg shadow-md border border-primary/10 md:text-right">
                <p className="text-sm">
                  Developed and maintained web applications using React,
                  Node.js, Express, and MongoDB. Implemented RESTful APIs and
                  integrated third-party services. Contributed to the
                  improvement of development processes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary/60 rounded-full border-4 border-background-light dark:border-background-dark"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right">
                <p className="font-bold text-lg text-primary">
                  Junior Developer
                </p>
                <p className="text-sm text-[#0f1923]/70 dark:text-[#f5f7f8]/70">
                  Startup X
                </p>
                <p className="text-sm font-medium text-primary/80">
                  2017 - 2019
                </p>
              </div>
              <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg shadow-md border border-primary/10">
                <p className="text-sm">
                  Assisted in the development of web applications using
                  JavaScript, HTML, and CSS. Gained experience in front-end and
                  back-end development. Participated in team meetings and
                  contributed to project planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
