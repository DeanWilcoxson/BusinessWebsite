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
const ProfessionalPackage = () => {
  return (
    <ProfessionalContainer>
      <ProfessionalBox>
        <ProfessionalHeader></ProfessionalHeader>
        <ProfessionalBodyContent>
          <ProfessionalDescription></ProfessionalDescription>
          <ProfessionalImg></ProfessionalImg>
        </ProfessionalBodyContent>
        <ProfessionalListsBox>
          <ProfessionalProsList></ProfessionalProsList>
          <ProfessionalConsList></ProfessionalConsList>
        </ProfessionalListsBox>
        <ProfessionalPackageItemsList></ProfessionalPackageItemsList>
      </ProfessionalBox>
    </ProfessionalContainer>
  );
};

export default ProfessionalPackage;
