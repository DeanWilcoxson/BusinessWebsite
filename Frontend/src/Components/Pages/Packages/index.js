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
} from "./PackagesElements";
const Packages = ({ id, heading, packages }) => {
  // console.log(packages);
  return (
    <PackagesContainer>
      <PackagesBox id={id}>
        <PackagesTitle>{heading}</PackagesTitle>
        <PackageBoxContainer>
          {packages.map((packaged) => {
            console.log(packaged);
            return (
              <PackageBox key={packages.indexOf(packaged)}>
                <Package>
                  <PackageHeader>{packaged.packageHeading}</PackageHeader>
                  <PackageImg src={packaged.image} alt="image"></PackageImg>
                  <PackageDescription>
                    {packaged.description}
                  </PackageDescription>
                  <PackagePrice>{packaged.price}</PackagePrice>
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
