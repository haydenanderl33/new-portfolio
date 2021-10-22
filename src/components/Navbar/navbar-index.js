import React, {useState, useEffect} from "react";
import { GiCrystalBars } from 'react-icons/gi'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './navbar-elements'

const Navbar = ({toggle, initials}) => {

const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
  if(window.scrollY >= 80){
    setScrollNav(!false)
  } else {
    setScrollNav(false)
  }
}

useEffect(() => {
  window.addEventListener('scroll', changeNav)
}, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          {/* <NavLogo to='/contact' offset={-80} scrollNav={scrollNav}>{initials}</NavLogo> */}
          <MobileIcon onClick={toggle} >
            <GiCrystalBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                <NavLinks to='about' smooth={true} duration={750} spy={true} exact={'true'} offset={-80}>
                    About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='resume' smooth={true} duration={750} spy={true} exact={'true'} offset={-80}>
                    Resume
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='skills' smooth={true} duration={750} spy={true} exact={'true'} offset={-80}>
                    Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='projects' smooth={true} duration={750} spy={true} exact={'true'} offset={-80}>
                    Projects
                </NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/contact">Contact Me</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
