import React, { useRef } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import { Carusel, Container, Next  } from "./style";
import AliceCarousel from "react-alice-carousel";
import next from "../../../assets/icons/next.svg";
import next2 from "../../../assets/icons/next (1).svg";

const Category = () => {
  const handleDragStart = (e) => e.preventDefault();
  const ref = useRef("click");
  const items = [
    <Card2 onDragStart={handleDragStart} role="presentation" />,
    <Card3 onDragStart={handleDragStart} role="presentation" />,
    <Card4 onDragStart={handleDragStart} role="presentation" />,
    <Card4 onDragStart={handleDragStart} role="presentation" />,
    <Card4 onDragStart={handleDragStart} role="presentation" />,
  ];
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 4,
    },
  };
  return (
    <Container >
      <Next src={next} onClick={()=> ref.current.slidePrev()}/>
      <Next.Left src={next2} onClick={()=> ref.current.slideNext()}/>
      <Carusel ref={ref}
        controlsStrategy="alternate"
        responsive={responsive}
        infinity={true}
        mouseTracking
        items={items}
        keyboardNavigation={true}
        infinite={true}
      ></Carusel>
    
    </Container>
  );
};

export default Category;
