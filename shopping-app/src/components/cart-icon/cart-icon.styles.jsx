import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  position: relative;
  margin-right: 1rem;

`;

export const CartIconLogo = styled(Logo)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const TotalItemCart = styled.div`
  position: absolute;
  top: 25%;
  left: calc(34.5%);
  font-weight: 600;
  font-size: 15px;
  color: black;
`;
