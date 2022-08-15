import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/Ai";
import * as IoIcons from "react-icons/Io";
import * as RiIcons from "react-icons/ri";

export const NavData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    subNav: [{ title: "Home", path: "/", icon: <FaIcons.FaHome /> }],
  },
];
