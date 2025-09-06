import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import AppliedSkill from "./components/AppliedSkill";
import { Toaster } from "./components/ui/toaster";


const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
  {/* <HeroSection /> */}
      <AboutSection />
  <Certification />
  <AppliedSkill />
      <ExperienceSection />
    { /* <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <CaseStudiesSection />*/}
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/certification" element={<Certification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
