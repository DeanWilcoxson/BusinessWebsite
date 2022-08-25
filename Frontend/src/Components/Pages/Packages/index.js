import React from "react";
import {
  PackagesContainer,
  PackagesBox,
  PackageBox,
  Package,
  PackagePrice,
  AdditionalServicesBox,
  ProcessesBox,
  PackageImg,
  PackageDescription,
  PackageHeader,
  PackagesTitle,
  PackageBoxContainer,
  PackageLink,
} from "./PackagesElements";
const Packages = ({ id, heading, lightText, packages }) => {
  return (
    <PackagesContainer>
      <PackagesBox id={id}>
        <PackagesTitle lightText={lightText}>{heading}</PackagesTitle>
        <PackageBoxContainer>
          {packages.map((packaged) => {
            console.log(packaged);
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
      <AdditionalServicesBox></AdditionalServicesBox>
      <ProcessesBox></ProcessesBox>
    </PackagesContainer>
  );
};
export default Packages;
