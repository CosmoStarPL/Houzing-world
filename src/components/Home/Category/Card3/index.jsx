import React from "react";
import Bac from "../../../../assets/imgs/3.png";
import { Container, Img } from "../Card1/style.js";
import { Icon } from "./style";
import '../../../../../src/index.css'

const Card3 = () => {
  return (
    <Container>
      <Img src={Bac}/>
      <Icon/>
      <div className="title color">Office</div>
    </Container>
  );
};

export default Card3;
