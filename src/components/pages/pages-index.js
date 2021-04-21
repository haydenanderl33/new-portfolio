import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar-index";
import MobileMenuPage from "../MobileMenu/mobileMenu-index";
import MainSection from "../MainSection/main-index";
import ProfileSection from "../ProfileSection/profile-index";
import ProExp from "../ProExpSection/proExp-index";
import Skills from "../SkillsSection/skills-index";
import LoadingAnimation from "../LoadingAnimation/loading-index";
import Projects from "../ProjectsSection/projects-index"
import Footer from "../FooterSection/footer-index"
import {
  mainInfo,
  workExp1,
  workExp2,
  skills,
  projects
} from "../Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, isLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => isLoading(true), 1500);
  // }, []);

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
          <Skills {...skills} />
          <Projects {...projects} />
          <Footer {...mainInfo}/>
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
