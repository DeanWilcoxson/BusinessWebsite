import SPA from '../../../Assets/Images/SPA.png';
import MPA from '../../../Assets/Images/MPA.png'

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
    },
    {
      packageHeading: "Professional Package",
      description:
        "The go to option for Small Businesses and LLCs that desire optimal growth.",
      image: `${MPA}`,
      price: "$1500 - 5000",
      lightText: true,
    },
    {
      packageHeading: " Enterprise Package",
      description:
        "This is the Premiere package for E-Commerce Sites, Large Corporations, and Enterprises.",
      image: `${MPA}`,
      price: "$5500+",
      lightText: true,
    },
  ],
};
export const AdditionalServicesSection = {
  id: "AdditionalServices",
  heading: "Services",
};
