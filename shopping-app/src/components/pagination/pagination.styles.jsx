import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0  auto 1rem auto;

  button {
    border: none;
    padding: 0.5rem 0.8rem;
    margin-right: 0.5rem;
    border-radius: 0.15rem;

    &.active {
      background: #0984e3;
    }

    &.disabled {
      pointer-events: none;
      box-shadow: none;
      color: #999;
    }
  }
`;
