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
        <ProfessionalHeader lightText={lightText}>{header}</ProfessionalHeader>
        <ProfessionalBodyContent>
          <ProfessionalDescription lightText={lightText}>
            {description}
          </ProfessionalDescription>
          <ProfessionalImg src={image}></ProfessionalImg>
        </ProfessionalBodyContent>
        <ProfessionalListsBox>
          <ProfessionalProsList>
            <ProfessionalListTitle lightText={lightText}>
              Pros:
            </ProfessionalListTitle>
            {pros.map((item) => {
              return (
                <ProfessionalListItem lightText={lightText}>
                  <b style={{ color: "green", padding: ".75rem" }}>&#x2714;</b>
                  {item}
                </ProfessionalListItem>
              );
            })}
          </ProfessionalProsList>
          <ProfessionalConsList>
            <ProfessionalListTitle lightText={lightText}>
              Cons:
            </ProfessionalListTitle>
            {cons.map((item) => {
              return (
                <ProfessionalListItem lightText={lightText}>
                  <b style={{ color: "red", padding: ".75rem" }}>&#x2718;</b>
                  {item}
                </ProfessionalListItem>
              );
            })}
          </ProfessionalConsList>
        </ProfessionalListsBox>
        <ProfessionalPackageItemsList>
          <ProfessionalListTitle lightText={lightText}>
            Whats Included:
          </ProfessionalListTitle>
          {whatsIncluded.map(() => {
            return (
              <ProfessionalPackageItem lightText={lightText}>
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
