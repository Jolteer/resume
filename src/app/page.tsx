import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { LatestPosts } from "@/components/LatestPosts";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <FeaturedProjects />
      <LatestPosts />
      <Contact />
    </>
  );
}
