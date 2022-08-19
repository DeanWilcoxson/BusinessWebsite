import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  NavContainer,
  NavBox,
  NavRouterButton,
  NavDropDown,
  NavScrollButton,
  NavDropDownCaret,
  NavDropDownContainer,
} from "./NavElements";
import { NavButtonData } from "./NavData";
const Nav = () => {
  const init = {
    home: false,
    packages: false,
    templates: false,
    about: false,
  };
  const [toggle, setToggle] = useState(init);

  // const [homeToggle, setHomeToggle] = useState(false);
  // const [packagesToggle, setPackagesToggle] = useState(false);
  const location = useLocation();

  function handleToggle() {
    console.log(location);
    if (location.pathname == "/") {
      setToggle((prev) => ({
        home: !toggle.home,
        packages: false,
      }));
      console.log(location.pathname);
    }
  }
  function handlePackagesToggle() {
    if (location.pathname == "/packages") {
      setToggle((prev) => ({
        home: false,
        packages: !toggle.packages,
      }));
      console.log(location.pathname);
    }
  }
  // function handleTemplatesToggle() {
  //   setTemplatesToggle(!homeToggle);
  // }

  return (
    <NavContainer>
      <NavBox>
        {NavButtonData.map((item) => {
          return (
            <NavDropDown>
              <NavRouterButton to={item.endpoint} onClick={handleToggle}>
                {item.text}
                <NavDropDownCaret></NavDropDownCaret>
              </NavRouterButton>
              {toggle.home ? (
                <NavDropDownContainer>
                  {item.subNav.map((subItem) => {
                    return (
                      <NavScrollButton
                        to={subItem.endpoint}
                        spy={true}
                        smooth={true}
                        onClick={handleToggle}
                      >
                        {subItem.text}
                      </NavScrollButton>
                    );
                  })}
                </NavDropDownContainer>
              ) : (
                ""
              )}
            </NavDropDown>
          );
        })}
      </NavBox>
    </NavContainer>
  );
};
export default Nav;
// <NavScrollButton
//                     to="technology"
//                     spy={true}
//                     smooth={true}
//                     onClick={handleHomeToggle}
//                   >
//                     Technology
//                   </NavScrollButton>
//                   <NavScrollButton
//                     to="hosting"
//                     spy={true}
//                     smooth={true}
//                     onClick={handleHomeToggle}
//                   >
//                     Hosting
//                   </NavScrollButton>

// <NavDropDown>
//           <NavRouterButton to="/packages" onClick={handlePackagesToggle}>
//             Packages<NavDropDownCaret></NavDropDownCaret>
//           </NavRouterButton>
//           {toggle.packages ? (
//             <NavDropDownContainer>
//               <NavScrollButton
//                 to="packages"
//                 spy={true}
//                 smooth={true}
//                 onClick={handlePackagesToggle}
//               >
//                 Packages
//               </NavScrollButton>
//               <NavScrollButton
//                 to="Services"
//                 spy={true}
//                 smooth={true}
//                 onClick={handlePackagesToggle}
//               >
//                 Services
//               </NavScrollButton>
//               <NavScrollButton
//                 to="hosting"
//                 spy={true}
//                 smooth={true}
//                 onClick={handlePackagesToggle}
//               >
//                 Processes
//               </NavScrollButton>
//             </NavDropDownContainer>
//           ) : (
//             ""
//           )}
//         </NavDropDown>
//         <NavRouterButton to="/templates">Templates</NavRouterButton>
//         <NavRouterButton to="/about">About</NavRouterButton>
