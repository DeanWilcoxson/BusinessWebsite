import styled from "styled-components";
import * as Scroll from "react-scroll";
const Element = Scroll.Element;
export const PackagesContainer = styled.div`
  margin: 0;
  padding: 2rem;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(19, 50, 69, 1) 15%,
    rgba(43, 114, 159, 1) 32%,
    rgba(53, 139, 195, 1) 41%,
    rgba(67, 177, 248, 1) 50%,
    rgba(50, 131, 184, 1) 68%,
    rgba(28, 74, 104, 1) 85%,
    rgba(0, 0, 0, 1) 100%
  );
`;
export const PackagesBox = styled.div`
  margin: 0;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PackageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  height: 50%;
`;
export const PackageBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PackagesTitle = styled.h1`
  font-family: "Times New Roman", Times, serif;
  display: block;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  z-index: 100;
  padding: 1.15rem;
  margin: 1.15rem;
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const Package = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px #888 outset;
  background: linear-gradient(
    180deg,
    rgba(189, 189, 189, 0.5049370089832808) 0%,
    rgba(65, 190, 248, 0.49933476808692223) 100%
  );

  border-radius: 20px;
  width: 75%;
`;
export const PackageHeader = styled.h3`
  border-bottom: 1px inset #f7f7ff;
  padding: 0.75rem;
  letter-spacing: 0.1em;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const PackageImg = styled.img`
  width: 70%;
  /* max-height: 150px; */
  padding: 1rem;
  /* border: 3px outset #888; */
  border-radius: 20px;
`;
export const PackageDescription = styled.p`
  text-align: left;
  letter-spacing: 0.1em;
  /* line-height: 1rem; */
  padding: 0.5rem;
  width: 70%;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const PackageLink = styled.a`
  text-decoration: none;
  text-align: center;
  width: 100%;
  /* margin-bottom: 0.5rem; */
  padding: 0.5rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
  color: #f7f7ff;
  border: 2px #88888855 inset;
  border-radius: 20px;
  &:hover {
    border: 2px #88888855 outset;
    color: #000;
    text-shadow: none;
    background-color: #20fc8f;
    transition: all 0.5s ease;
  }
`;
export const PackagePrice = styled.div`
  padding: 1rem 5rem;
  width: 75%;
  text-align: center;
  color: ${({ lightText }) => (lightText ? "#20fc8f " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;

export const ServicesContainer = styled.div`
  margin: 0;
  padding-top: 2rem;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(19, 50, 69, 1) 15%,
    rgba(43, 114, 159, 1) 32%,
    rgba(53, 139, 195, 1) 41%,
    rgba(67, 177, 248, 1) 50%,
    rgba(50, 131, 184, 1) 68%,
    rgba(28, 74, 104, 1) 85%,
    rgba(0, 0, 0, 1) 100%
  );
`;
export const AdditionalServicesBox = styled.div`
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AdditionalServicesTitle = styled.h1`
  font-family: "Times New Roman", Times, serif;
  display: block;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  z-index: 100;
  padding: 1.15rem;
  margin: 1.15rem;
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ServiceItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  min-height: 40vh;
  border: 3px #888 outset;
  border-radius: 20px;
  margin: 0.5rem;
  background: linear-gradient(
    180deg,
    rgba(189, 189, 189, 0.5049370089832808) 0%,
    rgba(65, 190, 248, 0.49933476808692223) 100%
  );
`;
export const ServiceTitle = styled.h3`
  text-align: center;
  padding: 1rem;
  font-family: Arial;
  border-bottom: 1px inset #f7f7ff;
  letter-spacing: 0.1em;
  font-weight: bold;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ServiceDescription = styled.p`
  text-align: left;
  width: 80%;
  padding: 0.5rem;
  letter-spacing: 0.1em;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ServiceOptionImage = styled.img`
  width: 20%;
  max-height: 40px;
  margin: 0.75rem;
`;
export const ServiceOptions = styled.ul`
  padding: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ServiceOptionsTitle = styled.b`
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
  padding: 0.5rem;
`;
export const ServiceOptionItem = styled.li`
  list-style-type: none;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;

export const ProcessesContainer = styled.div`
  margin: 0;
  padding: 2rem;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(19, 50, 69, 1) 15%,
    rgba(43, 114, 159, 1) 32%,
    rgba(53, 139, 195, 1) 41%,
    rgba(67, 177, 248, 1) 50%,
    rgba(50, 131, 184, 1) 68%,
    rgba(28, 74, 104, 1) 85%,
    rgba(0, 0, 0, 1) 100%
  );
`;
export const ProcessesBox = styled.div`
  margin: 0;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProcessesTitle = styled.h1`
  font-family: "Times New Roman", Times, serif;
  display: block;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  z-index: 100;
  padding: 1.15rem;
  margin: 1.15rem;
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ProcessesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Process = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  /* min-height: 25vh; */
  border: 3px #888 outset;
  border-radius: 20px;
  margin: 0.5rem;
  background: linear-gradient(
    180deg,
    rgba(189, 189, 189, 0.5049370089832808) 0%,
    rgba(65, 190, 248, 0.49933476808692223) 100%
  );
`;
export const ProcessTitle = styled.h3`
  text-align: center;
  padding: 1rem;
  letter-spacing: 0.1em;
  font-weight: bold;
  border-bottom: 1px inset #f7f7ff;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ProcessDescription = styled.p`
  text-align: center;
  padding: 1rem;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  width: 100%;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ProcessDuration = styled.p`
  text-align: center;
  width: 80%;
  padding-bottom: 1rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
