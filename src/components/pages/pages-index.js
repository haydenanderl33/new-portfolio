import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar-index";
import MobileMenuPage from "../MobileMenu/mobileMenu-index";
import MainSection from "../MainSection/main-index";
import ProfileSection from "../ProfileSection/profile-index";
import ProExp from "../ProExpSection/proExp-index";
import Skills from "../SkillsSection/skills-index";
import LoadingAnimation from "../LoadingAnimation/loading-index";
import Projects from "../ProjectsSection/projects-index";
import  Resume  from "../ResumeSection/resume-index";
import Footer from "../FooterSection/footer-index";
import {
  mainInfo,
  workExp1,
  workExp2,
  workExp3,
  skills,
  projects,
} from "../Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, isLoading] = useState(false);

  const loadingDone = () => {
    isLoading(true);
  };

  useEffect(() => {
    window.addEventListener("load", loadingDone());
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {loading ? (
        <>
          <MobileMenuPage isOpen={isOpen} toggle={toggle} {...mainInfo} />
          <Navbar toggle={toggle} {...mainInfo} />
          <MainSection {...mainInfo} />
          <ProfileSection {...mainInfo} />
          <ProExp {...workExp1} />
          <ProExp {...workExp2} />
          <ProExp {...workExp3} />
          <Skills {...skills} />
          <Projects {...projects} />
          <Resume/>
          <Footer {...mainInfo} />
        </>
      ) : (
        <>
          <LoadingAnimation />
        </>
      )}
    </>
  );
};

export default Home;
