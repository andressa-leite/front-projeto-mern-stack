import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import { props } from "../../Data";

function Home() {
  return (
    <>
      <NavBar />
      {props.map((item, index) => {
        return <Card key={index} props={item} />;
      })}
    </>
  );
}

export default Home;
