import img1 from "../../../../Assets/Images/img1.png";
import img2 from "../../../../Assets/Images/img2.png";
import img3 from "../../../../Assets/Images/img3.png";
export const homeObjOne = {
  id: "overview",
  heading: "Professional Web Design Services",
  description:
    "We provide expert design solutions for local Small Businesses and Entrepreneurs. Our specialties include Responsive Development, Database Creation, Search Engine Optimization & Restful Design. We use the M.E.R.N. stack for FullStack Development. Let us help you create your online presence today! ",
  img: `${img1}`,
  alt: "development-image",
  lightText: true,
  darkText: false,
  darkBg: false,
  buttons: [
    { url: "/packages", button_text: "Packages" },
    { url: "/contact", button_text: "Contact Us" },
  ],
};
export const homeObjTwo = {
  id: "technology",
  heading: "Drive Customers To Your Business",
  description:
    "Our Professional Process takes advantage of Industry Leading Technologies. We Implement the Powerful Framework React.JS for User Interface, as well as User Experience. We also Implement an Express.JS Framework for the Server and Routing. The Node.JS Runtime Environment is Perfect for the needed Scalability of a customers Backend. All of this along with the Non-Relational Document Database known for its Flexibility, MongoDB makes for an ideal solution for any business that needs an online presence.",
  img: `${img3}`,
  alt: "business-man",
  lightText: true,
  darkText: false,
  darkBg: false,
  buttons: [
    { url: "/templates", button_text: "Templates" },
    { url: "/process", button_text: "Process" },
  ],
};
export const homeObjThree = {
  id: "hosting",
  heading: "Domain Hosting",
  description:
    "Get your Website Up and Running through us. We will provide you with a list of domain hosting services that will fit your specific website needs. For more information, please contact us.",
  img: `${img2}`,
  alt: "hosting-services",
  lightText: true,
  darkText: false,
  darkBg: false,
  buttons: [
    { url: "/hosting", button_text: "Hosting" },
    { url: "/prices", button_text: "Prices" },
  ],
};
