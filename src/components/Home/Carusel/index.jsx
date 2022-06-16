import { Carousel } from "antd";
import React, { useRef } from "react";
import { Carus, Container, Img, Next } from "./style";
import Home1 from "../../../assets/imgs/home1.png";
import Home2 from "../../../assets/imgs/home2.png";
import next from "../../../assets/icons/next.svg";
import next2 from "../../../assets/icons/next (1).svg";

const Carusel = () => {
  const slider = useRef(null);
  return (
    <>
      <Container>
        <Next src={next} onClick={() => slider.current.next()} />
        <Next.Left src={next2} onClick={() => slider.current.prev()} />
        <Carousel ref={slider} autoplay>
          <Carus>
            <Img src={Home2} />
          </Carus>
          <Carus>
            <Img src={Home1} />
          </Carus>
        </Carousel>
      </Container>
      <br /><br /><br /><br /><br />
    </>
  );
};

export default Carusel;
