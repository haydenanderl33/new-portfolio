import React, { useState } from "react";
import Navbar from "../Navbar/navbar-index";
import MobileMenuPage from "../MobileMenu/mobileMenu-index";
import MainSection from "../MainSection/main-index";
import ProfileSection from "../ProfileSection/profile-index";
import ProExp from "../ProExpSection/proExp-index";
import Skills from "../SkillsSection/skills-index"
import { mainInfo, workExp1, workExp2, skills } from "../Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileMenuPage isOpen={isOpen} toggle={toggle} {...mainInfo} />
      <Navbar toggle={toggle} {...mainInfo} />
      <MainSection {...mainInfo} />
      <ProfileSection {...mainInfo} />
      <ProExp {...workExp1} />
      <ProExp {...workExp2} />
      <Skills {...skills} />
    </>
  );
};

export default Home;
