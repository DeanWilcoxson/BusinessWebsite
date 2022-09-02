import React from "react";
import { ContactData } from "./ContactData";

import {
  ContactsContainer,
  ContactsBox,
  Contact,
  ContactName,
  ContactCity,
  ContactImg,
  ContactQualifications,
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
              
            </Contact>
          );
        })}
      </ContactsBox>
    </ContactsContainer>
  );
};

export default ContactSection;
