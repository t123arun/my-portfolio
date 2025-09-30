import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-2xl bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-primary/20">
          <div className="flex items-center gap-3">
            <Link href="/">
              <svg
                className="h-8 w-8 text-accent text-[#ffc300]"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight"></h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-medium hover:text-accent transition-colors hover:text-[#ffc300]"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:text-accent transition-colors hover:text-[#ffc300]"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-sm font-medium hover:text-accent transition-colors hover:text-[#ffc300]"
              href="#skills"
            >
              Skills
            </Link>
            <Link
              className="text-sm font-medium hover:text-accent transition-colors hover:text-[#ffc300]"
              href="#contact"
            >
              Contact
            </Link>
            <div className="flex items-center gap-4">
              <Link
                className="text-subtext-dark hover:text-accent transition-colors hover:text-[#ffc300]"
                href="https://github.com/t123arun"
                target="blank"
              >
                <svg
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 256 256"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
              </Link>
              <Link
                className="text-subtext-dark hover:text-accent transition-colors hover:text-[#ffc300]"
                href="https://www.linkedin.com/in/tarun-kamboj-21a33a156/"
                target="blank"
              >
                <svg
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 256 256"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </Link>
            </div>
          </nav>
          <div className="md:hidden"></div>
        </div>
      </div>
    </header>
  );
}
