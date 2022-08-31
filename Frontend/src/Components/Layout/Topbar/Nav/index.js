import React, { useState, useEffect } from "react";
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
import NavLinkBox from "./NavLinkBox";
import { NavButtonData } from "./NavData";
function Nav() {
  // const init = {
  //   home: false,
  //   packages: false,
  //   templates: false,
  //   about: false,
  // };
  // const [toggle, setToggle] = useState(init);
  // const location = useLocation();
  // function handleToggle() {
  //   switch (location.pathname) {
  //     case "/":
  //       setToggle((prev) => ({
  //         home: !toggle.home,
  //         packages: false,
  //         templates: false,
  //         about: false,
  //       }));
  //       break;
  //     case "/packages":
  //       setToggle((prev) => ({
  //         home: false,
  //         packages: !toggle.packages,
  //         templates: false,
  //         about: false,
  //       }));
  //       break;
  //     case "/templates":
  //       setToggle((prev) => ({
  //         home: false,
  //         packages: false,
  //         templates: !toggle.templates,
  //         about: false,
  //       }));
  //       break;
  //     case "/about":
  //       setToggle((prev) => ({
  //         home: false,
  //         packages: false,
  //         templates: false,
  //         about: !toggle.about,
  //       }));
  //       break;
  //   }
  //   console.log(location.pathname);
  //   console.log(toggle);
  // }

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

// {NavButtonData.map((item) => {
//   return (
//     <NavDropDown key={NavButtonData.indexOf(item)}>
//       <NavRouterButton to={item.endpoint} onMouseEnter={handleToggle}>
//         {item.text}
//         <NavDropDownCaret></NavDropDownCaret>
//       </NavRouterButton>
//       {toggle.home ||
//       toggle.about ||
//       toggle.packages ||
//       toggle.templates ? (
//         <NavDropDownContainer>
//           {item.subNav.map((subItem) => {
//             return (
//               <NavScrollButton
//                 key={item.subNav.indexOf(subItem)}
//                 to={subItem.endpoint}
//                 spy={true}
//                 smooth={true}
//                 onClick={handleToggle}
//               >
//                 {subItem.text}
//               </NavScrollButton>
//             );
//           })}
//         </NavDropDownContainer>
//       ) : (
//         ""
//       )}
//     </NavDropDown>
//   );
// })}
