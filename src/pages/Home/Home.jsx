import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import { news } from "../../Data";
import { HomeBody } from "./HomeStyled";

function Home() {
  return (
    <>
      <NavBar />
      <HomeBody>
        {news.map((item, index) => {
          return <Card key={index} news={item} />;
        })}
      </HomeBody>
    </>
  );
}

export default Home;
