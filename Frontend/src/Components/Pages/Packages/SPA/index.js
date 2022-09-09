import React from "react";
import {
  SinglePageContainer,
  SinglePageBox,
  SinglePageBodyContent,
  SinglePageDescription,
  SinglePageHeader,
  SinglePageImg,
  SinglePagePackageItemsList,
  SinglePagePackageItem,
  SinglePagePackageItemTitle,
  SinglePagePackageItemDesc,
  SinglePageListsBox,
  SinglePageListTitle,
  SinglePageConsList,
  SinglePageProsList,
  SinglePageListItem,
} from "./SPA_Elements";

const SinglePagePackage = ({
  header,
  description,
  image,
  pros,
  cons,
  whatsIncluded,
  lightText,
}) => {
  return (
    <SinglePageContainer>
      <SinglePageBox>
        <SinglePageHeader lightText={lightText}>{header}</SinglePageHeader>
        <SinglePageBodyContent>
          <SinglePageDescription lightText={lightText}>
            {description}
          </SinglePageDescription>
          <SinglePageImg src={image}></SinglePageImg>
        </SinglePageBodyContent>
        <SinglePageListsBox>
          <SinglePageProsList>
            <SinglePageListTitle lightText={lightText}>
              Pros:
            </SinglePageListTitle>
            {pros.map((item) => {
              return (
                <SinglePageListItem
                  lightText={lightText}
                  key={pros.indexOf(item)}
                >
                  {item}
                </SinglePageListItem>
              );
            })}
          </SinglePageProsList>
          <SinglePageConsList>
            <SinglePageListTitle lightText={lightText}>
              Cons:
            </SinglePageListTitle>
            {cons.map((item) => {
              return (
                <SinglePageListItem
                  lightText={lightText}
                  key={cons.indexOf(item)}
                >
                  {item}
                </SinglePageListItem>
              );
            })}
          </SinglePageConsList>
        </SinglePageListsBox>
        <SinglePagePackageItemsList>
          <SinglePageListsBox>Whats Included:</SinglePageListsBox>
          {whatsIncluded.map((item) => {
            return (
              <SinglePagePackageItem key={whatsIncluded.indexOf(item)}>
                <SinglePagePackageItemTitle lightText={lightText}>
                  {item.title}
                </SinglePagePackageItemTitle>
                <SinglePagePackageItemDesc lightText={lightText}>
                  {item.description}
                </SinglePagePackageItemDesc>
              </SinglePagePackageItem>
            );
          })}
        </SinglePagePackageItemsList>
      </SinglePageBox>
    </SinglePageContainer>
  );
};

export default SinglePagePackage;
