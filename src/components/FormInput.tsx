import React, { useState } from "react";
import {
  Icon,
  Input,
  InputContainer,
  InputLabel,
  RadioLabel,
  DateInput,
} from "./styles/RegistrationStyles";
import "react-datepicker/dist/react-datepicker.css";

interface Label {
  label?: string;
  placeholder?: string;
  icon?: any;
  type?: string;
  name?: string;
  selectedRadio?: string;
  setSelectedRadio: (data: string) => void | string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
// type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

const FormInput = ({ label, placeholder, icon, type, handleChange }: Label) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <InputContainer>
        {type === "date" ? (
          <>
            <Icon as={icon} />
            <DateInput
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
            />
          </>
        ) : (
          <>
            <Icon as={icon} />
            <Input
              placeholder={placeholder}
              type={type}
              onChange={handleChange}
            />
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
