import React, { useState, useEffect } from "react";
import { TopbarContainer, TopbarBox } from "./TopbarElements";
import Nav from "./Nav/index";
import Logo from "./Logo/index";
const Topbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    window.scrollY >= 10 ? setScrollNav(true) : setScrollNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // console.log(NavButtonData)
  return (
    <TopbarContainer scrollNav={scrollNav}>
      <TopbarBox>
        <Logo />
        <Nav />
      </TopbarBox>
      </TopbarContainer>
      );
};
export default Topbar;