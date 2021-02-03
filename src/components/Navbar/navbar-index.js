import React from "react";
import { GiCrystalBars } from 'react-icons/gi'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './navbar-elements'

const Navbar = ({toggle, initials}) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to='home'>{initials}</NavLogo>
          <MobileIcon onClick={toggle} >
            <GiCrystalBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                <NavLinks to='about'>
                    About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='resume'>
                    Resume
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='skills'>
                    Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='Projects'>
                    Projects
                </NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to>Contact Me</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
