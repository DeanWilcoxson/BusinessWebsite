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
} from "./PackagesElements";
import SinglePageApp2 from "../../../Assets/Images/SinglePageApp2.JPG";
import MultiPageApp2 from "../../../Assets/Images/MultiPageApp2.JPG";

const Packages = () => {
  return (
    <PackagesContainer>
      <PackagesBox>
        <PackageBox>
          <Package>
            <PackageHeader>SPA (Single Page Application)</PackageHeader>
            <PackageImg src={SinglePageApp2}></PackageImg>
            <PackageDescription>
              Single Page Application: One page With multiple endpoints.
              Applications like Youtube and Netflix use this format.
            </PackageDescription>
          </Package>
          <PackagePrice>Price: $1000</PackagePrice>
        </PackageBox>
        <PackageBox>
          <Package>
            <PackageHeader>3-5 Pages (Multi Page Application)</PackageHeader>
            <PackageImg src={MultiPageApp2}></PackageImg>
            <PackageDescription>
              Multi Page Application: Multiple Pages with multiple endpoints.
              The majority of websites on the internet use this format.
            </PackageDescription>
          </Package>
          <PackagePrice>Price: $1000 - $5000</PackagePrice>
        </PackageBox>
        <PackageBox>
          <Package>
            <PackageHeader>5+ Pages (Multi Page Application)</PackageHeader>
            <PackageImg src={MultiPageApp2}></PackageImg>
            <PackageDescription>
              Multi Page Application: Multiple Pages with multiple endpoints.
              The majority of websites on the internet use this format.
            </PackageDescription>
          </Package>
          <PackagePrice>Price: $5500+</PackagePrice>
        </PackageBox>
      </PackagesBox>
      <AdditionalServicesBox></AdditionalServicesBox>
      <ProcessesBox></ProcessesBox>
    </PackagesContainer>
  );
};
export default Packages;
