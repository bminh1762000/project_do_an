import styled from "styled-components";
import Button from "../button/button.component";

export const CartItemContainer = styled.div`
  width: 45%;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
`;

export const CartImage = styled.div`
  width: 10rem;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  border-radius: 0.2rem;
`;

export const CartAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonCart = styled(Button)`
  padding: 0.2rem 1rem;
  margin: 0.2rem;
`;
