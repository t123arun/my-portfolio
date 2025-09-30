export default function Contact() {
  return (
    <section className="py-16" id="contact">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="form-input w-full bg-primary/5 dark:bg-primary/10 border-primary/20 focus:border-[#ffd60a] focus:ring-[#ffd60a] rounded-lg p-3"
              id="email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="form-textarea w-full bg-primary/5 dark:bg-primary/10 border-primary/20 focus:border-[#ffd60a] focus:ring-[#ffd60a] rounded-lg p-3"
              id="message"
              name="message"
              placeholder="Your message..."
              rows={4}
            ></textarea>
          </div>
          <div>
            <button
              className="w-full bg-[#ffc300] hover:bg-[#ffd60a] text-primary font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
