import React from "react";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import {
  AddressDiv,
  BodyWrapper,
  Column,
  Columns,
  FormWrapper,
  InputDiv,
} from "./components/styles/RegistrationStyles";
import Header from "./components/Header";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { ImLocation } from "react-icons/im";
import FormInput from "./components/FormInput";
// import ReactSelect from "react-select";
import FormDropdown from "./components/FormDropdown";

// console.log(State.getAllStates());
// console.log(City.getAllCities(), "cityyyy");

const theme = {
  colors: {
    body: "#efefef",
  },
  mobile: "768px",
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <BodyWrapper>
          <GlobalStyles />

          <FormWrapper>
            <Header />
            <Columns>
              <InputDiv>
                <Column size={6}>
                  <FormInput
                    label="Name*"
                    placeholder="First Name"
                    type="text"
                  />
                </Column>
                <Column size={6}>
                  <FormInput placeholder="Last Name" type="text" />
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
                  placeholder="DOB"
                  icon={SlCalender}
                  type="date"
                />
              </Column>
            </Columns>
          </FormWrapper>
        </BodyWrapper>
      </>
    </ThemeProvider>
  );
};
export default App;
