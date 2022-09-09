import React from "react";
import { NavContainer, NavBox } from "./NavElements";
import NavLinkBox from "./NavLinkBox";
import { NavButtonData } from "./NavData";
function Nav({}) {
  return (
    <NavContainer>
      <NavBox>
        {NavButtonData.map((item) => {
          return <NavLinkBox {...item} key={NavButtonData.indexOf(item)} />;
        })}
      </NavBox>
    </NavContainer>
  );
}
export default Nav;
