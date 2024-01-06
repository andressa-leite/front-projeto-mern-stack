import React from "react";
import { CardContainer } from "./CardStyled";
import { CardBody } from "./CardStyled";
import { CardFooter } from "./CardStyled";
import { TextLimit } from "../TextLimit/TextLimit";

function Card(props) {
  return (
    <CardContainer>
      <CardBody top={props.top}>
        <div>
          <h2>{props.title}</h2>
          <img src={props.banner} alt="Imagem" />
        </div>
        {/* <p>{props.text}</p> */}
        <TextLimit text={props.text} limit={150}/>
      </CardBody>

      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{props.likes?.length}</span>
        </div>
        <div>
          <i className="bi bi-chat"></i>
          <span>{props.comments?.length}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;
