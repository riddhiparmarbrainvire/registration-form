import React from "react";
import { Input, InputLabel } from "./styles/RegistrationStyles";
import { Label } from "../Interface";

const FormInput = ({ label, placeholder }: Label) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Input placeholder={placeholder} />
    </>
  );
};

export default FormInput;
