import React, { useState } from "react";
import {
  AddressDiv,
  CheckBoxContainer,
  Column,
  Columns,
  DropdownWrapper,
  InputDiv,
  InputLabel,
  RegisterButton,
} from "./styles/RegistrationStyles";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { ImLocation } from "react-icons/im";
import FormInput from "./FormInput";
import FormDropdown from "./FormDropdown";
import FormRadio from "./FormRadio";
import FormCheckbox from "./FormCheckbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormValues {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

const FormBody = () => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const [values, setValues] = useState<FormValues>({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState<FormValues>({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    const filled =
      values.fName &&
      values.lName &&
      values.email &&
      values.phone &&
      values.password;

    setSubmitDisabled(!filled);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("form submitted");
    e.preventDefault();

    // let formErrors = validateForm(values);
    // setErrors(formErrors);

    // console.log(formErrors, "formErrors");

    // if (Object.values(formErrors).every((value) => value === "")) {
    //   toast.success("Form Submitted Successfully");
    // }
  };

  // const validateForm = (values: FormValues) => {
  //   const errors: FormValues = {
  //     fName: "",
  //     lName: "",
  //     email: "",
  //     phone: "",
  //     password: "",
  //     address: "",
  //   };

  //   if (!values.fName) {
  //     errors.fName = "Name is required";
  //   }

  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = "Email is invalid";
  //   }

  //   if (!values.phone) {
  //     errors.phone = "Phone is required";
  //   } else if (!/^\d+$/.test(values.phone)) {
  //     errors.phone = "Phone number must contain only numbers";
  //   } else if (values.phone.length !== 10) {
  //     errors.phone = "The length of the phone number should be 10";
  //   }

  //   const passwordRegex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  //   if (!values.password.match(passwordRegex)) {
  //     errors.password =
  //       "Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character";
  //   }

  //   return errors;
  // };

  return (
    <>
      {/* margin-left: 35px; */}
      <form onSubmit={handleSubmit}>
        <Columns>
          <InputDiv>
            <Column size={6}>
              <FormInput
                label="Name*"
                placeholder="First Name"
                type="text"
                setSelectedRadio={setSelectedRadio}
              />
            </Column>
            <Column size={6} marginTop={20} marginLeft={30}>
              <FormInput
                placeholder="Last Name"
                type="text"
                setSelectedRadio={setSelectedRadio}
              />
            </Column>
          </InputDiv>

          <Column
            size={12}
            flex={"flex"}
            flexDirection={"column"}
            marginTop={30}
          >
            <FormInput
              label="Email*"
              placeholder="Email"
              icon={MdEmail}
              type="text"
              setSelectedRadio={setSelectedRadio}
            />
          </Column>

          <Column
            size={12}
            flex={"flex"}
            flexDirection={"column"}
            marginTop={30}
          >
            <FormInput
              label="Telephone*"
              placeholder="Phone"
              icon={BsFillTelephoneFill}
              type="text"
              setSelectedRadio={setSelectedRadio}
            />
          </Column>

          <Column
            size={12}
            flex={"flex"}
            flexDirection={"column"}
            marginTop={30}
          >
            <FormInput
              label="Address*"
              placeholder="Address"
              icon={ImLocation}
              type="text"
              setSelectedRadio={setSelectedRadio}
            />
          </Column>

          <AddressDiv>
            <Column
              size={3}
              flex={"flex"}
              flexDirection={"column"}
              marginTop={30}
            >
              <FormDropdown />
            </Column>
          </AddressDiv>

          <Column
            size={12}
            flex={"flex"}
            flexDirection={"column"}
            marginTop={30}
          >
            <FormInput
              label="Date of birth*"
              // placeholder="DOB"
              icon={SlCalender}
              type="date"
              setSelectedRadio={setSelectedRadio}
            />
          </Column>
        </Columns>

        <DropdownWrapper>
          <InputLabel>Where did you hear about us?*</InputLabel>
          <FormRadio
            label="A friend or colleague"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
          <FormRadio
            label="Google"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
          <FormRadio
            label="Article News"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
          <FormRadio
            label="Blog Posts"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
          <FormRadio
            label="Others"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
        </DropdownWrapper>

        {selectedRadio === "Others" && (
          <FormInput
            type="text"
            placeholder="Please specify the reason"
            setSelectedRadio={setSelectedRadio}
          />
        )}
        <CheckBoxContainer>
          <FormCheckbox />
        </CheckBoxContainer>
        <RegisterButton type="submit">Submit</RegisterButton>
        <ToastContainer />
      </form>
    </>
  );
};

export default FormBody;
