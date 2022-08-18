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
            <PackageHeader>Single Page Application</PackageHeader>
            <PackageImg src={SinglePageApp2}></PackageImg>
            <PackageDescription>
              Great choice for a Blog or Personal Website for Entrepreneurs i.e.
              Portfolio.
            </PackageDescription>
          </Package>
          <PackagePrice>Price: $1000</PackagePrice>
        </PackageBox>
        <PackageBox>
          <Package>
            <PackageHeader>Professional Package</PackageHeader>
            <PackageImg src={MultiPageApp2}></PackageImg>
            <PackageDescription>
              The go to option for Small Businesses and LLCs that desire optimal
              growth.
            </PackageDescription>
          </Package>
          <PackagePrice>Price: $1000 - $5000</PackagePrice>
        </PackageBox>
        <PackageBox>
          <Package>
            <PackageHeader>Enterprise Package</PackageHeader>
            <PackageImg src={MultiPageApp2}></PackageImg>
            <PackageDescription>
              This is the Premiere package for E-Commerce Sites, Large
              Corporations, and Enterprises.
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
