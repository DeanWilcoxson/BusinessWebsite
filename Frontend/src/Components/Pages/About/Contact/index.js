import React from "react";

import {
  ContactsContainer,
  ContactsBox,
  Contact,
  ContactName,
  ContactImg,
  ContactLanguagesList,
  ContactLanguageItem,
  ContactQualifications,
  ContactAddressBox,
  ContactCity,
  ContactState,
  ContactZipCode,
  ContactYrsExp,
  ContactHeader,
  ContactLanguagesTitle,
  ContactNumber,
} from "./ContactElements";
const ContactSection = ({ title, contacts, lightText }) => {
  return (
    <ContactsContainer>
      <ContactHeader lightText={lightText}>{title}</ContactHeader>
      <ContactsBox>
        {contacts.map((contact) => {
          return (
            <Contact key={contacts.indexOf(contact)}>
              <ContactName lightText={lightText}>{contact.name}</ContactName>
              <ContactNumber lightText={lightText}>
                {contact.phoneNumber}
              </ContactNumber>
              <ContactImg>{contact.image}</ContactImg>
              <ContactQualifications lightText={lightText}>
                {contact.qualifications}
              </ContactQualifications>
              <ContactLanguagesTitle lightText={lightText}>
                Languages:
              </ContactLanguagesTitle>
              <ContactLanguagesList>
                {contact.languages.map((language) => {
                  return (
                    <ContactLanguageItem
                      lightText={lightText}
                      key={contact.languages.indexOf(language)}
                    >
                      {language}
                    </ContactLanguageItem>
                  );
                })}
              </ContactLanguagesList>
              <ContactAddressBox>
                <ContactCity lightText={lightText}>{contact.city}</ContactCity>
                <ContactState lightText={lightText}>
                  {contact.state}
                </ContactState>
                <ContactZipCode lightText={lightText}>
                  {contact.zipCode}
                </ContactZipCode>
              </ContactAddressBox>
              <ContactYrsExp lightText={lightText}>
                {contact.yearsExp}
              </ContactYrsExp>
            </Contact>
          );
        })}
      </ContactsBox>
    </ContactsContainer>
  );
};

export default ContactSection;
