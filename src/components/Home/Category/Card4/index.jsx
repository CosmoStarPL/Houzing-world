import React from "react";
import { Container, Img } from "..//Card1/style";
import Bac from "../../../../assets/imgs/4.png";
import { Icon } from "./style";

const Card4 = () => {
  return (
    <Container>
      <Img src={Bac}></Img>
      <Icon/>
    </Container>
  );
};

export default Card4;
