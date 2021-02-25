import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  img {
    min-width: 22rem;
    max-width: 30rem;
    height: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 70%;
  margin-left: 5rem;
  text-align: left;

  .title {
    margin: 2rem 0;
  }

  .price {
    font-size: 1.6rem;
    color: #e17055;
  }
  .description{
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;
