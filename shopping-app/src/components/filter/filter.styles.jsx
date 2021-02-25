import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  margin: 2rem 0 3rem 0;
`;

export const FilterForm = styled.form`
  display: flex;
  align-items: center;

  input {
    display: inline-block;
    margin-right: 1rem;
  }
`;

export const PriceGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;
