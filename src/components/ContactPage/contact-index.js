import React from "react";
import {
  ContactPage,
  ContactBoxContainer,
  ContactH1Wrapper,
  ContactH1,
  ContactLinksWrapper,
  ContactLink,
  BtnRoute,
  BtnWrap

} from "./contact-elements";

const Contact = () => {
  return (
    <ContactPage>
      <ContactBoxContainer>
        <ContactH1Wrapper>
          <ContactH1>
            Please contact me at the links below
          </ContactH1>
        </ContactH1Wrapper>
        <ContactLinksWrapper>
          <ContactLink href="mailto:hayden.anderl33@gmail.com">
            hayden.anderl33@gmail.com
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/hayden-anderl/">
            https://www.linkedin.com/in/hayden-anderl/
          </ContactLink>
        </ContactLinksWrapper>
        <BtnWrap>
          <BtnRoute to="/">Back to Main Page</BtnRoute>
        </BtnWrap>
      </ContactBoxContainer>
    </ContactPage>
  );
};

export default Contact;
