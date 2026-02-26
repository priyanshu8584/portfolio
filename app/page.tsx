import Hero from "./components/Hero";
// import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}