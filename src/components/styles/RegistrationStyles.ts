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
  width: 90%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const InputContainer = styled.div`
  width: 90%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  border: 3px dotted re;
`;

export const DateInput = styled.input.attrs({
  type: "date",
})`
  width: 90%;
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
    visibility: hidden;
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
`;
