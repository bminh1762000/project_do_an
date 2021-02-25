import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  width: 3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & * {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 3.5rem;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const OptionLink = styled(Link)`
  font-size: 0.95rem;
  margin: 0 1.25rem;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.775rem;
    padding: 0;
    margin: 0 1rem;
  }
`;

export const HamburgerContainer = styled.div`
  display: none;
  margin-top: 1.2rem;

  & div {
    padding: 0.14rem 1rem;
    background-color: #2d3436;
    border-radius: 0.1rem;
    margin-bottom: 0.2rem;
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
