import React, { useRef } from "react";
import {
  DateInput,
  Icon,
  Input,
  InputContainer,
  InputLabel,
  RadioLabel,
} from "./styles/RegistrationStyles";
import { Label } from "../Interface";

const FormInput = ({ label, placeholder, icon, type }: Label) => {
  const inputRef = useRef(null);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <InputContainer>
        {type === "date" ? (
          <>
            <Icon as={icon} />
            <DateInput placeholder={placeholder} type={type} ref={inputRef} />
          </>
        ) : (
          <>
            <Icon as={icon} />
            <Input placeholder={placeholder} type={type} />
            {type === "radio" ? (
              <RadioLabel htmlFor="radio">Radio Label</RadioLabel>
            ) : (
              ""
            )}
          </>
        )}
      </InputContainer>
    </>
  );
};

export default FormInput;
