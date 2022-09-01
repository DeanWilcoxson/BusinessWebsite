import React from "react";
import {
  TemplatePageContainer,
  TemplatePageHeader,
  TemplateHeader,
  TemplateContainer,
  TemplateBox,
  TemplateLeftArrow,
  TemplateRightArrow,
  TemplateBody,
  Template,
  TemplatePageBox,
} from "./TemplatePageElements";
const Templates = ({ id, heading, lightText, templates }) => {
  return (
    <TemplatePageContainer id={id}>
      <TemplatePageBox>
        <TemplatePageHeader lightText={lightText}>{heading}</TemplatePageHeader>
        <TemplateContainer>
          <TemplateLeftArrow></TemplateLeftArrow>
          <TemplateBox>
            {templates.map((template) => {
              return (
                <Template>
                  <TemplateHeader></TemplateHeader>
                  <TemplateBody></TemplateBody>
                </Template>
              );
            })}
          </TemplateBox>
          <TemplateRightArrow></TemplateRightArrow>
        </TemplateContainer>
      </TemplatePageBox>
    </TemplatePageContainer>
  );
};
export default Templates;
