import { React } from "react";
import { TopbarContainer, TopbarBox } from "./TopbarElements";
import Nav from "./Nav/index";
import Logo from "./Logo/index";
const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarBox>
        <Logo />
        <Nav />
      </TopbarBox>
    </TopbarContainer>
  );
};
export default Topbar;
