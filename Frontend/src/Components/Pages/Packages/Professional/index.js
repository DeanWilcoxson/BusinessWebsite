import React from "react";
import {
  ProfessionalContainer,
  ProfessionalBox,
  ProfessionalBodyContent,
  ProfessionalHeader,
  ProfessionalDescription,
  ProfessionalImg,
  ProfessionalPackageItemsList,
  ProfessionalPackageItem,
  ProfessionalPackageItemDesc,
  ProfessionalPackageItemTitle,
  ProfessionalListsBox,
  ProfessionalListTitle,
  ProfessionalProsList,
  ProfessionalConsList,
  ProfessionalListItem,
} from "./ProfessionalElements";
const ProfessionalPackage = ({
  lightText,
  header,
  image,
  description,
  pros,
  cons,
  whatsIncluded,
}) => {
  return (
    <ProfessionalContainer>
      <ProfessionalBox>
        <ProfessionalHeader>{header}</ProfessionalHeader>
        <ProfessionalBodyContent>
          <ProfessionalDescription>{description}</ProfessionalDescription>
          <ProfessionalImg src={image}></ProfessionalImg>
        </ProfessionalBodyContent>
        <ProfessionalListsBox>
          <ProfessionalProsList>
            <ProfessionalListTitle>Pros:</ProfessionalListTitle>
            {pros.map((item) => {
              return (
                <ProfessionalListItem>
                  <b style={{ color: "green", padding: ".75rem" }}>&#x2714;</b>
                  {item}
                </ProfessionalListItem>
              );
            })}
          </ProfessionalProsList>
          <ProfessionalConsList>
            <ProfessionalListTitle>Cons:</ProfessionalListTitle>
            {cons.map((item) => {
              return (
                <ProfessionalListItem>
                  <b style={{ color: "red", padding: ".75rem" }}>&#x2718;</b>
                  {item}
                </ProfessionalListItem>
              );
            })}
          </ProfessionalConsList>
        </ProfessionalListsBox>
        <ProfessionalPackageItemsList>
          <ProfessionalListTitle>Whats Included:</ProfessionalListTitle>
          {whatsIncluded.map(() => {
            return (
              <ProfessionalPackageItem>
                <ProfessionalPackageItemTitle>
                  {item.title}
                </ProfessionalPackageItemTitle>
                <ProfessionalPackageItemDesc>
                  {item.description}
                </ProfessionalPackageItemDesc>
              </ProfessionalPackageItem>
            );
          })}
        </ProfessionalPackageItemsList>
      </ProfessionalBox>
    </ProfessionalContainer>
  );
};

export default ProfessionalPackage;
