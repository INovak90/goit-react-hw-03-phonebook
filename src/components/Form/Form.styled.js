import styled from 'styled-components';
import {
  ErrorMessage as FormErrorMessage,
  Form as FormStyle,
  Field as Input,
} from 'formik';

export const ErrorMessage = styled(FormErrorMessage)`
  display: block;
  font-size: 14px;
  color: red;
`;

export const Form = styled(FormStyle)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid gray;
  border-radius: 5px;
  padding: 10px;
  max-width: 900px;
`;
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
`;
export const Field = styled(Input)`
  border: 2px solid gray;
  border-radius: 5px;
  padding: 5px;
  max-width: 300px;
  font-size: 14px;
`;
export const FormButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: 2px solid gray;
  border-radius: 5px;
  padding: 10px;
  max-width: 200px;
  background-color: white;
  &:hover {
    cursor: pointer;
    background-color: orange;
  }
`;
