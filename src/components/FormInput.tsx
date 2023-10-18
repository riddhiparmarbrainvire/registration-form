import React from "react";
import {
  DateInput,
  Icon,
  Input,
  InputContainer,
  InputLabel,
} from "./styles/RegistrationStyles";
import { Label } from "../Interface";

const FormInput = ({ label, placeholder, icon, type }: Label) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <InputContainer>
        {type === "date" ? (
          <>
            <Icon as={icon} />
            <DateInput placeholder={placeholder} type={type} />
          </>
        ) : (
          <>
            <Icon as={icon} />
            <Input placeholder={placeholder} type={type} />
          </>
        )}
      </InputContainer>
    </>
  );
};

export default FormInput;
