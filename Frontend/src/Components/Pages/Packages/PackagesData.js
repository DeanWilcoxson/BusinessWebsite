import SPA from "../../../Assets/Images/SPA.png";
import MPA from "../../../Assets/Images/MPA.png";
import database from "../../../Assets/Images/database.png";
import interfaceImg from "../../../Assets/Images/interfaceImg.png";
import SeoMagnifyingGlass from "../../../Assets/Images/SeoMagnifyingGlass.png";
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
      img: `${interfaceImg}`,
      desc:
        "Everything the user sees and interacts with when visiting and traversing your website pages and endpoints.",
      languages: [{ title: "React.JS" }, { title: "Styled-Components" }],
    },
    {
      title: "Database Creation",
      img: `${database}`,
      desc:
        "Create a database connection to your application, to store all relevant data, and for ease of use managing data.",
      languages: [{ title: "MongoDB" }, { title: "Mongoose" }],
    },
    {
      title: "SEO Optimization",
      img: `${SeoMagnifyingGlass}`,
      desc:
        "When a potential customer searches for your service, your website will be the top results on all search engines.",
      languages: [{ title: "JavaScript" }, { title: "Html5" }],
    },
    {
      title: "",
      desc: "",
      languages: [{ title: "" }, { title: "" }],
    },
  ],
};
export const ProcessesSection = {
  processId: "processes",
  processesHeading: "Process",
  lightText: true,
  processes: [
    {
      title: "Step 1: Design",
      description: "Initial Design Phase, First Draft",
      duration: "1-2 Weeks",
    },
    {
      title: "Step 2: Initial Sprint",
      description: "Implementation Phase, Coding the First Draft.",
      duration: "5-6 Weeks",
    },
    {
      title: "Step 3: Redesign/ Redevelopment",
      description:
        "Customer Input Phase, Client decides what changes to make, Second Draft",
      duration: "3-4 Weeks",
    },
    {
      title: "Step 4: Redesign Sprint",
      description: "Implementation Phase, Coding the Second Draft",
      duration: "1-2 Weeks",
    },
    {
      title: "Step 5: Finalization of Design",
      description: "Modifying Design Phase, Final Draft",
      duration: "1-2 Weeks",
    },
    {
      title: "Step 6: Final Sprint",
      description: "Implementation Phase, Coding the Final Draft",
      duration: "1-2 Weeks",
    },
    {
      title: "Final Step: Product Delivery",
      description: "Product Delivery Phase, Customer Receives Live Website.",
      duration: "1 Week",
    },
  ],
};
