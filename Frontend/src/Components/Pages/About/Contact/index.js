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
  ContactLanguagesBox,
} from "./ContactElements";
const ContactSection = ({ id, title, contacts, lightText }) => {
  return (
    <ContactsContainer id={id}>
      <ContactHeader lightText={lightText}>{title}</ContactHeader>
      <ContactsBox>
        {contacts.map((contact) => {
          return (
            <Contact key={contacts.indexOf(contact)}>
              <ContactName lightText={lightText}>{contact.name}</ContactName>
              <ContactNumber lightText={lightText}>
                {contact.phoneNumber}
              </ContactNumber>
              <ContactImg src={contact.image}></ContactImg>
              <ContactQualifications lightText={lightText}>
                {contact.qualifications}
              </ContactQualifications>
              <ContactLanguagesBox>
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
              </ContactLanguagesBox>
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
