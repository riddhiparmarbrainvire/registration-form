// @ts-ignore
import React from "react";
import {
  FormErrorMessage,
  RadioInput,
  RadioLabel,
  RadioWrapper,
} from "./styles/RegistrationStyles";

interface Label {
  label?: string;
  placeholder?: string;
  icon?: any;
  type?: string;
  name?: string;
  selectedRadio: string;
  setSelectedRadio: (data: string) => void | string;
  formErrors: any;
}

const FormRadio = ({
  label,
  type,
  selectedRadio,
  setSelectedRadio,
  formErrors,
}: Label) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedRadio) {
      setSelectedRadio("");
    } else {
      setSelectedRadio(e.target.value);
    }
  };
  console.log(formErrors, "formErrors");
  return (
    <div>
      <RadioWrapper>
        <RadioInput
          value={label}
          type={type}
          id="radio"
          name="radio"
          onChange={handleChange}
          checked={selectedRadio === label}
        />
        <RadioLabel htmlFor="radio">{label}</RadioLabel>
      </RadioWrapper>
      {!selectedRadio && (
        <FormErrorMessage>{formErrors?.radioBtn}</FormErrorMessage>
      )}
    </div>
  );
};

export default FormRadio;
