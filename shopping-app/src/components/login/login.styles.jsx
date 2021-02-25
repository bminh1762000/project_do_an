import styled from "styled-components";

export const LoginForm = styled.form`
  width: 85vw;
  max-width: 40rem;
  margin: 0 auto;
  background: #fefefe;
  padding: 1.25rem 1rem;
  border-radius: 0.2rem;
  box-shadow: 2px 5px 15px #2c3e50;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 1.4rem;
  color: ;
`;

export const ButtonSubmit = styled.button`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 0.5rem 1rem;
`;

export const FormControl = styled.div`
  label {
    display: block;
  }

  input {
    width: 100%;
    display: inline-block;
    border: none;
    background: #f1f1f1;
    padding: 0.25rem 0.3rem;
    margin: 0.5rem 0 1rem 0;
  }
`;

export const EmptyNotice = styled.p`
  color: red;
  text-align: center;
`;

export const RegisterLink = styled.p`
  margin-bottom: 0;
  margin-top: 1rem;
  text-align: center;

  button {
    background: transparent;
    border: none;
    color: black;
    display: inline-block;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;
