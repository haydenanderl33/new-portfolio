import React, { useState } from "react";
import Navbar from "../Navbar/navbar-index";
import MobileMenuPage from "../MobileMenu/mobileMenu-index";
import MainSection from "../MainSection/main-index";
import ProfileSection from "../ProfileSection/profile-index";
import ProExp from "../ProExpSection/proExp-index";
import { mainInfo, workExp1 } from "../Data";

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
    </>
  );
};

export default Home;
