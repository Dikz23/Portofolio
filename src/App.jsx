// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStackFlow from "./components/TechStackFlow";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import BookPageTransition from "./components/BookPageTransition";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 overflow-x-hidden">
      <Navbar />
      
      <main className="flex flex-col">
        <BookPageTransition id="hero">
          <Hero />
        </BookPageTransition>

        <BookPageTransition id="tentang-saya">
          <About />
        </BookPageTransition>

        <BookPageTransition id="gallery">
          <TechStackFlow />
        </BookPageTransition>

        <BookPageTransition id="keahlian">
          <Skills />
        </BookPageTransition>

        <BookPageTransition id="projects">
          <Projects />
        </BookPageTransition>

        <BookPageTransition id="sertifikat">
          <Certificates />
        </BookPageTransition>

        <BookPageTransition id="contact">
          <Contact />
        </BookPageTransition>
      </main>

      <Footer />
    </div>
  );
}