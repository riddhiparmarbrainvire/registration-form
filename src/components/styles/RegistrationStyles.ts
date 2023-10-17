import styled from "styled-components";

type ColumnProps = {
  size?: number;
  sizeSm?: number;
  sizeMd?: number;
  sizeLg?: number;
  sizeXl?: number;
};

export const BodyWrapper = styled.div`
  margin: auto;
  max-width: 750px;
  background-color: #efefef;
`;

export const FormWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  height: 80%;
  width: 80%;
`;

export const Column = styled.div<ColumnProps>`
  flex: ${({ size }) => size};
  height: 50px;
`;

export const InputLabel = styled.span`
  color: red;
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const DivForNameInputs = styled.div`
  border: 2px solid green;
  display: flex;
`;

export const DivForFirstNameInput = styled.div`
  border: 2px solid violet;
  /* display: flex; */
`;

export const DivForLastNameInput = styled.div`
  border: 2px solid violet;
  /* display: flex; */
`;
