// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ScrollAnimationWrapper from "./components/ScrollAnimationWrapper";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 overflow-x-hidden selection:bg-neutral-700 selection:text-white">
      <Navbar />
      
      <main className="flex flex-col">
        <ScrollAnimationWrapper>
          <Hero />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <About />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Roadmap />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Skills />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Projects />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Certificates />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Contact />
        </ScrollAnimationWrapper>
      </main>

      <Footer />
    </div>
  );
}