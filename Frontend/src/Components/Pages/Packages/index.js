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
                  <PackageLink href={packaged.url} lightText={lightText}>
                    {packaged.buttonText}
                  </PackageLink>
                  <PackagePrice lightText={lightText}>
                    {packaged.price}
                  </PackagePrice>
                </Package>
              </PackageBox>
            );
          })}
        </PackageBoxContainer>
      </PackagesBox>
      <AdditionalServicesBox id={servicesId}>
        <AdditionalServicesTitle>{servicesHeading}</AdditionalServicesTitle>
        <ServicesList>
          {services.map((service) => {
            return (
              <ServiceItem key={services.indexOf(service)}>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.desc}</ServiceDescription>
                <ServiceOptions>
                  {service.languages.map((item) => {
                    return (
                      <ServiceOptionItem key={service.languages.indexOf(item)}>
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
      <ProcessesBox></ProcessesBox>
    </PackagesContainer>
  );
};
export default Packages;
