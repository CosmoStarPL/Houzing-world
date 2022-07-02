import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 100px 270px;
  position: relative;
`;
const Next = styled.img`
  position: absolute;
  top: 40%;
  left: -10%;
  z-index: 9;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
`;
Next.Left = styled.img`
  position: absolute;
  top: 40%;
  left: 100%;
  z-index: 9;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  fill: black;
`;
const Carusel = styled(AliceCarousel)`
  display: flex;
  width: 100%;
  height: 500px;
  margin-left: 60px;
  .alice-carusel {
    width: 980px;
  }
`;
export { Carusel, Container, Next };
