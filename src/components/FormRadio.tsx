import React, { useEffect, useRef, useState } from "react";
import {
  RadioInput,
  RadioLabel,
  RadioWrapper,
} from "./styles/RegistrationStyles";
import { Label } from "../Interface";
import FormInput from "./FormInput";

const FormRadio = ({ label, type }: Label) => {
  const [showInput, setShowInput] = useState("");

  //   const inputRef = useRef<HTMLInputElement>(null);
  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);

  // const handleRadioClick = () => {
  //   console.log("Radio button clicked");

  //   if (label === "Others") {
  //     setShowInput(true);
  //   } else {
  //     setShowInput(false);
  //   }

  // };

  const handleRadioClick = () => {
    // setShowInput((prevShowInput) => !prevShowInput);
  };

  return (
    <div>
      <RadioWrapper>
        <RadioInput
          type={type}
          id="radio"
          name="radio"
          onClick={handleRadioClick}
          // checked={showInput}
        />
        <RadioLabel htmlFor="radio">{label}</RadioLabel>
      </RadioWrapper>
      {showInput && label === "Others" ? (
        <FormInput
          type="text"
          placeholder="Please specify the reason"
          //   ref={inputRef}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default FormRadio;
