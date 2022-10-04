import React from "react";
import {
  EnterpriseContainer,
  EnterpriseBox,
  EnterpriseBodyContent,
  EnterpriseHeader,
  EnterpriseDescription,
  EnterpriseImg,
  EnterprisePackageItemsList,
  EnterprisePackageItem,
  EnterprisePackageItemDesc,
  EnterprisePackageItemTitle,
  EnterpriseListsBox,
  EnterpriseListTitle,
  EnterpriseProsList,
  EnterpriseConsList,
  EnterpriseListItem,
} from "./EnterpriseElements";
const EnterprisePackage = ({
  header,
  description,
  image,
  pros,
  cons,
  whatsIncluded,
  lightText,
}) => {
  return (
    <EnterpriseContainer>
      <EnterpriseBox>
        <EnterpriseHeader>{header}</EnterpriseHeader>
        <EnterpriseBodyContent>
          <EnterpriseDescription>{description}</EnterpriseDescription>
          <EnterpriseImg src={image}></EnterpriseImg>
        </EnterpriseBodyContent>
        <EnterpriseListsBox>
          <EnterpriseProsList></EnterpriseProsList>
          <EnterpriseConsList></EnterpriseConsList>
        </EnterpriseListsBox>
        <EnterprisePackageItemsList></EnterprisePackageItemsList>
      </EnterpriseBox>
    </EnterpriseContainer>
  );
};

export default EnterprisePackage;
