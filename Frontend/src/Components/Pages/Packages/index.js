import React from "react";
import {
  PackagesContainer,
  PackagesBox,
  PackagesTitle,
  PackageBoxContainer,
  PackageBox,
  Package,
  PackageHeader,
  PackageImg,
  PackageDescription,
  PackageLink,
  PackagePrice,
  AdditionalServicesBox,
  AdditionalServicesTitle,
  ServicesList,
  ProcessesBox,
  ServiceItem,
  ServiceTitle,
  ServiceDescription,
  ServiceOptions,
  ServiceOptionItem,
  ServiceOptionsTitle,
  ServicesContainer,
  ProcessesContainer,
  ServiceOptionImage,
} from "./PackagesElements";
const Packages = ({
  packageId,
  packageHeading,
  lightText,
  packages,
  servicesId,
  servicesHeading,
  services,
}) => {
  return (
    <>
      <PackagesContainer>
        <PackagesBox id={packageId}>
          <PackagesTitle lightText={lightText}>{packageHeading}</PackagesTitle>
          <PackageBoxContainer>
            {packages.map((packaged) => {
              return (
                <PackageBox key={packages.indexOf(packaged)}>
                  <Package>
                    <PackageHeader lightText={lightText}>
                      {packaged.packageHeading}
                    </PackageHeader>
                    <PackageImg src={packaged.image} alt="image"></PackageImg>
                    <PackageDescription lightText={lightText}>
                      {packaged.description}
                    </PackageDescription>
                    <PackagePrice lightText={lightText}>
                      {packaged.price}
                    </PackagePrice>
                    <PackageLink href={packaged.url} lightText={lightText}>
                      {packaged.buttonText}
                    </PackageLink>
                  </Package>
                </PackageBox>
              );
            })}
          </PackageBoxContainer>
        </PackagesBox>
      </PackagesContainer>
      <ServicesContainer>
        <AdditionalServicesBox id={servicesId}>
          <AdditionalServicesTitle lightText={lightText}>
            {servicesHeading}
          </AdditionalServicesTitle>
          <ServicesList>
            {services.map((service) => {
              return (
                <ServiceItem key={services.indexOf(service)}>
                  <ServiceTitle lightText={lightText}>
                    {service.title}
                  </ServiceTitle>
                  <ServiceDescription lightText={lightText}>
                    {service.desc}
                  </ServiceDescription>
                  <ServiceOptionImage src={service.img}></ServiceOptionImage>
                  <ServiceOptionsTitle lightText={lightText}>
                    Languages Used:
                  </ServiceOptionsTitle>
                  <ServiceOptions>
                    {service.languages.map((item) => {
                      return (
                        <ServiceOptionItem
                          key={service.languages.indexOf(item)}
                          lightText={lightText}
                        >
                          {item.title}
                        </ServiceOptionItem>
                      );
                    })}
                  </ServiceOptions>
                </ServiceItem>
              );
            })}
          </ServicesList>
        </AdditionalServicesBox>
      </ServicesContainer>
    </>
  );
};
export default Packages;
// <ProcessesContainer>
//   <ProcessesBox></ProcessesBox>
// </ProcessesContainer>
