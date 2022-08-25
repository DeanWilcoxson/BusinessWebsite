import styled from "styled-components";
export const PackagesContainer = styled.div`
  margin: 0;
  padding: 3rem;
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
  border: 1px grey solid;
  border-radius: 20px;
  width: 75%;
`;
export const PackageHeader = styled.h3`
  padding: 0.75rem;
  font-family: Arial;
  letter-spacing: 0.2em;
  font-weight: 200;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const PackageImg = styled.img`
  width: 75%;
  padding: 1rem;
`;
export const PackageDescription = styled.p`
  text-align: center;
  padding: 1rem;
  width: 75%;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const PackageLink = styled.a`
  text-decoration: none;
  text-align: center;
  padding: 0.5rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
  color: #f7f7ff;
  &:hover {
    color: #20fc8f;
    background-color: #88888855;
  }
`;
export const PackagePrice = styled.div`
  /* border: 1px grey solid; */
  padding: 1rem 5rem;
  width: 75%;
  text-align: center;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const AdditionalServicesBox = styled.div`
  margin: 0;
  padding: 3rem;
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
  padding: 1.15rem;
`;
export const ServiceItem = styled.li`
  padding: 1.15rem;
`;
export const ServiceTitle = styled.h3`
  padding: 1.15rem;
`;
export const ServiceDescription = styled.p`
  padding: 1.15rem;
`;
export const ServiceOptions = styled.ul`
  padding: 1.15rem;
`;
export const ServiceOptionItem = styled.li`
  padding: 1.15rem;
`;
export const ProcessesBox = styled.div``;
