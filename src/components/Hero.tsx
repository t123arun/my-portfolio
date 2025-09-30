import Link from "next/link";
import SkillsetSlider from "./SkillsetSlider";
import { SendHorizonal } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat flex-col">
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex justify-center items-center flex-col gap-10">
        <div className="relative">
          <div className="w-110 h-60 bg-gray-900 rounded-t-lg border-4 border-[#ffc300] flex items-center justify-center mx-auto flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#ffc300] tracking-tighter mb-4">
              Hi, I'm <span className="text-accent">Tarun</span>
            </h1>
            <Tooltip>
              <TooltipTrigger>
                <Link href="#contact">
                  <SendHorizonal
                    color="#ffc300"
                    size={50}
                    className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left" className="text-[#ffc300] text-lg">
                Contact Me
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="w-96 h-6 bg-gray-700 rounded-b-lg mx-auto"></div>

          <div className="w-[420px] h-2 bg-gray-600 rounded-b-xl mx-auto border-4 border-[#ffc300]"></div>
        </div>

        <div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-subtext-dark mb-8 text-white">
            A passionate MERN stack developer focused on creating innovative and
            user-friendly web applications. I specialize in building robust
            backends with Node.js and Express, and dynamic frontends with React.
          </p>
          <Link
            className="inline-block bg-[#ffc300] hover:bg-accent-[#ffd60a] text-primary font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
            href="#projects"
          >
            View My Work
          </Link>
        </div>
      </div>
      <SkillsetSlider />
    </section>
  );
}
