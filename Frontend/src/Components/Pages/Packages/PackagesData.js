import SPA from "../../../Assets/Images/SPA.png";
import MPA from "../../../Assets/Images/MPA.png";

export const PackagesSection = {
  packageId: "packages",
  packageHeading: "Packages",
  lightText: true,
  packages: [
    {
      packageHeading: "Single Page Application",
      description:
        "Great choice for a Blog or Personal Website for Entrepreneurs i.e. Portfolio.",
      image: `${SPA}`,
      price: "$1000",
      lightText: true,
      buttonText: "View Package",
      url: "/packages/singlepageapp",
    },
    {
      packageHeading: "Professional Package",
      description:
        "The go to option for Small Businesses and LLCs that desire optimal growth.",
      image: `${MPA}`,
      price: "$3000",
      lightText: true,
      buttonText: "View Package",
      url: "/packages/professional",
    },
    {
      packageHeading: " Enterprise Package",
      description:
        "The Premiere package for E-Commerce Sites, Large Corporations and Enterprises.",
      image: `${MPA}`,
      price: "$5500+",
      lightText: true,
      buttonText: "View Package",
      url: "/packages/enterprise",
    },
  ],
};
export const AdditionalServicesSection = {
  servicesId: "services",
  servicesHeading: "Services",
  lightText: true,
  services: [
    {
      title: "User Interface",
      desc:
        "Everything the user sees and interacts with when visiting and traversing your website pages and endpoints.",
      languages: [{ title: "React.JS" }, { title: "Styled-Components" }],
    },
    {
      title: "Database Creation",
      desc:
        "Create a database connection to your application, to store all relevant data, and for ease of use managing data.",
      languages: [{ title: "MongoDB" }, { title: "Mongoose" }],
    },

    // { title: "", desc: "", languages: ["", "", "", "", ""] },
    // { title: "", desc: "", languages: ["", "", "", "", ""] },
    // { title: "", desc: "", languages: ["", "", "", "", ""] },
    // { title: "", desc: "", languages: ["", "", "", "", ""] },
    // { title: "", desc: "", languages: ["", "", "", "", ""] },
    // { title: "", desc: "", languages: ["", "", "", "", ""] },
    // { title: "", desc: "", languages: ["", "", "", "", ""] },
  ],
};
