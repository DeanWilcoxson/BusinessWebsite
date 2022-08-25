import SPA from "../../../Assets/Images/SPA.png";
import MPA from "../../../Assets/Images/MPA.png";

export const PackagesSection = {
  id: "packages",
  heading: "Packages",
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
        "The Premiere package for Large Corporations and Enterprises.",
      image: `${MPA}`,
      price: "$5500+",
      lightText: true,
      buttonText: "View Package",
      url: "/packages/enterprise",
    },
  ],
};
export const AdditionalServicesSection = {
  id: "AdditionalServices",
  heading: "Services",
  services: [
    { title: "", desc: "", languages: ["", "", "", "", ""] },
    { title: "", desc: "", languages: ["", "", "", "", ""] },
    { title: "", desc: "", languages: ["", "", "", "", ""] },
    { title: "", desc: "", languages: ["", "", "", "", ""] },
    { title: "", desc: "", languages: ["", "", "", "", ""] },
    { title: "", desc: "", languages: ["", "", "", "", ""] },
    { title: "", desc: "", languages: ["", "", "", "", ""] },
    { title: "", desc: "", languages: ["", "", "", "", ""] },
    { title: "", desc: "", languages: ["", "", "", "", ""] },
  ],
};
