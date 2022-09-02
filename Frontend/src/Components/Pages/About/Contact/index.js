import React from "react";
import { ContactData } from "./ContactData";

import {
  ContactsContainer,
  ContactsBox,
  Contact,
  ContactName,
  ContactImg,
  ContactLanguagesList,
  ContactLanguageItem,
  ContactQualifications,
  ContactCity,
  ContactState,
  ContactZipCode,
  ContactYrsExp,
} from "./ContactElements";
const ContactSection = () => {
  return (
    <ContactsContainer>
      <ContactsBox>
        {ContactData.map((contact) => {
          return (
            <Contact>
              <ContactName>{contact.name}</ContactName>
              <ContactImg>{contact.image}</ContactImg>
              <ContactQualifications>
                {contact.qualifications}
              </ContactQualifications>
              <ContactLanguagesList>
                {contact.languages.map((language) => {
                  return <ContactLanguageItem>{language}</ContactLanguageItem>;
                })}
              </ContactLanguagesList>
              <ContactCity>{contact.city}</ContactCity>
              <ContactState>{contact.state}</ContactState>
              <ContactZipCode>{contact.zipCode}</ContactZipCode>
              <ContactYrsExp>{contact.yearsExp}</ContactYrsExp>
            </Contact>
          );
        })}
      </ContactsBox>
    </ContactsContainer>
  );
};

export default ContactSection;
