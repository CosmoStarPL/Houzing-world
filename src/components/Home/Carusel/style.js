import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Carus = styled.div``;
const Img = styled.img`
  filter: brightness(30%);
  width: 100%;
  height: 571px;
`;
const Next = styled.img`
  position: absolute;
  top: 50%;
  left: 1%;
  z-index: 9;
  fill: black;
`;
Next.Left = styled.img`
  position: absolute;
  top: 50%;
  left: 97%;
  z-index: 9;
`;

export { Container, Carus, Img, Next };
