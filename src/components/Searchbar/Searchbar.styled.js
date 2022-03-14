import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  padding: 5px 10px;
  width: 300px;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: blue;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 5px 5px;
  border-radius: 5px;
  border: 0;
  min-width: 150px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #000;
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;
  box-shadow: 0px 3px 2px -2px rgba(0, 0, 0, 0.2),
    0px 2px 1px 0px rgba(0, 0, 0, 0.14), 1px 1px 4px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: blue;
    color: #fff;
  }
`;
