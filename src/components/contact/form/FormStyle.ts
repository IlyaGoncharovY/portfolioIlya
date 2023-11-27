import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 200;
`
export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`
export const Input = styled.input`
  padding: 20px;
  background-color: #a7aaad;
  border: none;
  border-radius: 5px;
`
export const TextArea = styled.textarea`
  padding: 20px;
  background-color: #a7aaad;
  border: none;
  border-radius: 5px;
`
