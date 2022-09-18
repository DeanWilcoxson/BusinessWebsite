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
const EnterprisePackage = () => {
  return (
    <EnterpriseContainer>
      <EnterpriseBox>
        <EnterpriseHeader></EnterpriseHeader>
        <EnterpriseBodyContent>
          <EnterpriseDescription></EnterpriseDescription>
          <EnterpriseImg></EnterpriseImg>
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
