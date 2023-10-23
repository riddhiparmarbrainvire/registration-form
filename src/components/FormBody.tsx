import React, { FormEvent, useState, useEffect } from "react";
import {
  AddressDiv,
  Column,
  Columns,
  DropdownWrapper,
  FormErrorMessage,
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
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  date: string;
  selectCountry: string;
  tncCheckbox: string;
  radioBtn: string;
}

const FormBody = () => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    date: "",
    selectCountry: "",
    tncCheckbox: "",
    radioBtn: "",
  });

  const [formErrors, setFormErrors] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    date: "",
    selectCountry: "",
    tncCheckbox: "",
    radioBtn: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      key: string
    ) => {
      setFormValues((prev) => ({
        ...prev,
        [e.target.name]: e?.target?.value,
      }));
    };
  }, [formValues]);

  const validateForm = (formValues: FormValues) => {
    const errors: FormValues = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      date: "",
      selectCountry: "",
      tncCheckbox: "",
      radioBtn: "",
    };

    if (!formValues.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!formValues.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!formValues.address) {
      errors.address = "Address is required";
    }

    if (!formValues.date) {
      errors.date = "Please select a Date";
    }

    if (!formValues.tncCheckbox) {
      errors.tncCheckbox = "Please select the checkbox";
    }

    if (!formValues.radioBtn) {
      errors.radioBtn = "Please select the radio";
    }

    if (!formValues.selectCountry) {
      errors.selectCountry = "Please select Country";
    }

    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }

    if (!formValues.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d+$/.test(formValues.phone)) {
      errors.phone = "Phone number must contain only numbers";
    } else if (formValues.phone.length !== 10) {
      errors.phone = "The length of the phone number should be 10";
    }

    return errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let formErrors = validateForm(formValues);
    setFormErrors(formErrors);

    if (Object.values(formErrors).every((value) => value === "")) {
      toast.success("Form Submitted Successfully");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Columns>
          <InputDiv>
            <Column size={6}>
              <FormInput
                label="Name*"
                placeholder="First Name"
                type="text"
                name="firstName"
                value={formValues.firstName}
                setSelectedRadio={setSelectedRadio}
                handleChange={handleChange}
              />
              {formErrors.firstName && (
                <FormErrorMessage>{formErrors.firstName}</FormErrorMessage>
              )}
            </Column>
            <Column size={6} marginTop={20} marginLeft={30}>
              <FormInput
                placeholder="Last Name"
                name="lastName"
                type="text"
                setSelectedRadio={setSelectedRadio}
                handleChange={handleChange}
              />
              {formErrors.lastName && (
                <FormErrorMessage>{formErrors.lastName}</FormErrorMessage>
              )}
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
              name="email"
              icon={MdEmail}
              type="text"
              setSelectedRadio={setSelectedRadio}
            />
            {formErrors.email && (
              <FormErrorMessage>{formErrors.email}</FormErrorMessage>
            )}
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
              name="phone"
              icon={BsFillTelephoneFill}
              type="text"
              setSelectedRadio={setSelectedRadio}
            />
            {formErrors.phone && (
              <FormErrorMessage>{formErrors.phone}</FormErrorMessage>
            )}
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
              name="address"
              icon={ImLocation}
              type="text"
              setSelectedRadio={setSelectedRadio}
            />
            {formErrors.address && (
              <FormErrorMessage>{formErrors.address}</FormErrorMessage>
            )}
          </Column>

          <AddressDiv>
            <Column size={12} marginTop={30}>
              <FormDropdown formErrors={formErrors} />
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
              icon={SlCalender}
              name="dob"
              type="date"
              setSelectedRadio={setSelectedRadio}
            />
            {formErrors.date && (
              <FormErrorMessage>{formErrors.date}</FormErrorMessage>
            )}
          </Column>
        </Columns>

        <DropdownWrapper>
          <InputLabel>Where did you hear about us?*</InputLabel>
          <FormRadio
            label="A friend or colleague"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            formErrors={formErrors}
          />
          <FormRadio
            label="Google"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            formErrors={formErrors}
          />
          <FormRadio
            label="Article News"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            formErrors={formErrors}
          />
          <FormRadio
            label="Blog Posts"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            formErrors={formErrors}
          />
          <FormRadio
            label="Others"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            formErrors={formErrors}
          />
        </DropdownWrapper>

        {selectedRadio === "Others" && (
          <FormInput
            type="text"
            placeholder="Please specify the reason"
            setSelectedRadio={setSelectedRadio}
          />
        )}

        <FormCheckbox formErrors={formErrors} />
        <RegisterButton type="submit">Submit</RegisterButton>
        <ToastContainer />
      </form>
    </>
  );
};

export default FormBody;
