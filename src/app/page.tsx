import ProjectsSlider from "@/components/ProjectsSlider";
import SkillsetSlider from "@/components/SkillsetSlider";
import Contact from "@/components/Contact";
import AboutSection from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AboutSection />
          <SkillsetSlider />
          <ProjectsSlider />
          <Experience />
          <Contact />
        </div>
      </main>
    </>
  );
}
