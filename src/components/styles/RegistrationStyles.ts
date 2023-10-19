import styled from "styled-components";

type ColumnProps = {
  size?: number;
  sizeSm?: number;
  sizeMd?: number;
  sizeLg?: number;
  sizeXl?: number;
  flex?: string;
  flexDirection?: string;
  marginTop?: number;
};

export const BodyWrapper = styled.div`
  margin: auto;
  max-width: 750px;
  background-color: #efefef;
  height: 200vh;
`;

export const FormWrapper = styled.div`
  height: 100vh;
`;

export const Headers = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 30px;
  font-weight: 700;
  background-color: #efefef;

  h2 {
    color: #1f47bf;
    margin: 0;
  }
`;

export const Columns = styled.div`
  height: 100%;
  width: 100%;
`;

export const Column = styled.div<ColumnProps>`
  flex: ${({ size }) => size};
  display: ${({ flex }) => flex};
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin-top: ${({ marginTop }) => marginTop + `px`};
`;

export const InputLabel = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const InputContainer = styled.div`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  height: 9%;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  border: 3px dotted re;
  pointer-events: none;
`;

export const DateInput = styled.input.attrs({
  type: "date",
})`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  &::-webkit-calendar-picker-indicator {
    /* visibility: hidden; */
    opacity: 0;
  }
`;

export const AddressDiv = styled.div`
  display: flex;
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: transparent;
  height: 137%;
  width: 30%;
`;

export const RadioWrapper = styled.div`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  height: 9%;
  margin: 7px 0 5px 0;
`;

export const RadioLabel = styled.label`
  margin-left: 10px;
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;

  &:after {
    width: 20px;
    height: 20px;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBoxContainer = styled.div`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  height: 9%;
  margin-top: 30px;
`;

export const TermsText = styled.span`
  font-size: 16px;
  margin-left: 10px;
`;

export const TermsCheckbox = styled.input`
  height: 20px;
  width: 20px;
`;

export const TermsLink = styled.a`
  color: blue;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  align-items: center;
  background-color: #313131;
  /* background: ${(props) => (props.disabled ? "grey" : "blue")}; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
    justify-content: center;
  line-height: 1.25;
  margin-right: 10px;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 15%;
  margin-top: 30px;
  padding: 10px;

  :hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  :active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;
