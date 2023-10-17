import React from "react";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
// import FormBody from "./components/FormBody";
import {
  BodyWrapper,
  Column,
  Columns,
  DivForFirstNameInput,
  DivForLastNameInput,
  DivForNameInputs,
  FormWrapper,
} from "./components/styles/RegistrationStyles";
import Header from "./components/Header";
import FormInput from "./components/FormInput";

const theme = {
  colors: {
    body: "#fff",
  },
  mobile: "768px",
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <BodyWrapper>
          <GlobalStyles />
          <Header />
          <FormWrapper>
            <Columns>
              <DivForNameInputs>
                <DivForFirstNameInput>
                  <Column size={6}>
                    <FormInput label="1. Name" placeholder="First Name" />
                  </Column>
                </DivForFirstNameInput>

                <DivForLastNameInput>
                  <Column size={6}>
                    <FormInput />
                  </Column>
                </DivForLastNameInput>
              </DivForNameInputs>
            </Columns>
          </FormWrapper>
        </BodyWrapper>
      </>
    </ThemeProvider>
  );
};
export default App;
