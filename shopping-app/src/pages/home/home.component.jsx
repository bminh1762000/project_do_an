import React from "react";
import { useHistory } from "react-router-dom";

import { HomePageContainer, HeroContainer } from "./home.styles";

const HomePage = () => {
  let history = useHistory();
  return (
    <HomePageContainer>
      <HeroContainer>
        <h1>Think, Code, Deploy</h1>
        <h3>Embrace your choice - we do</h3>
        <button onClick={() => history.push("/products")}>OUR PRODUCTS</button>
      </HeroContainer>
    </HomePageContainer>
  );
};

export default HomePage;
