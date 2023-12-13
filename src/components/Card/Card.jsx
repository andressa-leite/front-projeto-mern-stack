import React from "react";
import { CardContainer } from "./CardStyled";
import { CardBody } from "./CardStyled";
import { CardFooter } from "./CardStyled";

function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <img src={props.banner} alt="Imagem" />
      </CardBody>

      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{props.likes}</span>
        </div>
        <div>
          <i className="bi bi-chat"></i>
          <span>{props.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;
