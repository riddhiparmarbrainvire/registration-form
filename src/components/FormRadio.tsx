// @ts-ignore
import React, { useState } from "react";
import {
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
}

const FormRadio = ({ label, type, selectedRadio, setSelectedRadio }: Label) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedRadio) {
      setSelectedRadio("");
    } else {
      setSelectedRadio(e.target.value);
    }
  };

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
    </div>
  );
};

export default FormRadio;
