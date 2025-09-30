import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-20 lg:py-24" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark dark:text-primary-light mb-4">
            Get In<span className="text-[#ffc300]"> Touch</span>
          </h1>
          <p className="text-lg text-tertiary-dark dark:text-tertiary-light max-w-2xl mx-auto">
            I'm currently available for freelance work and open to discussing
            new projects. Whether you have a question or just want to say hi,
            I’ll get back to you!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className=" dark:bg-secondary-dark p-8 rounded-lg shadow-sm shadow-white">
            <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6">
              <span className="text-[#ffc300]">Send a Message</span>
            </h2>
            <form action="#" method="POST">
              <div className="space-y-6">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full bg-slate-100 dark:bg-primary-dark border-tertiary-light dark:border-tertiary-dark placeholder-tertiary-dark dark:placeholder-tertiary-light text-black dark:text-primary-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full bg-slate-100 dark:bg-primary-dark border-tertiary-light dark:border-tertiary-dark placeholder-tertiary-dark dark:placeholder-tertiary-light text-primary-dark dark:text-primary-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 text-black focus:ring-primary"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    className="w-full bg-slate-100 dark:bg-primary-dark border-tertiary-light dark:border-tertiary-dark placeholder-tertiary-dark dark:placeholder-tertiary-light text-primary-dark dark:text-primary-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-black"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                  ></textarea>
                </div>
                <div>
                  <button
                    className="w-full bg-[#ffc300] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300 cursor-pointer"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-primary-light dark:bg-secondary-dark p-8 rounded-lg shadow-sm shadow-white">
              <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">
                <span className="text-[#ffc300]">Contact Information</span>
              </h3>
              <div className="space-y-4 text-tertiary-dark dark:text-tertiary-light">
                <p className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-3 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span>
                    <Link href="mailto:tarunkamboj49@gmail.com">
                      tarunkamboj49@gmail.com
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
