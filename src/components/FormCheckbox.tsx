import React, { useState } from "react";
import {
  TermsCheckbox,
  TermsText,
  CheckBoxWrapper,
  TermsLink,
} from "./styles/RegistrationStyles";

const FormCheckbox: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(event.target.checked);
  };

  const handleTermsAndConditions = () => {
    setOpenAlert(true);
    alert(
      "I have read, understood, and accepted the PRIVACY POLICY for membership. Once you submit your application, we will contact you shortly to complete your membership application. Thank you!"
    );
  };

  return (
    <CheckBoxWrapper>
      <TermsCheckbox type="checkbox" checked={agreed} onChange={handleChange} />
      <TermsText>
        I have read, understood, and accepted the PRIVACY POLICY for membership.
        <TermsLink onClick={handleTermsAndConditions}>
          Terms and Conditions
        </TermsLink>
      </TermsText>
    </CheckBoxWrapper>
  );
};

export default FormCheckbox;
