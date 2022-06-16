import styled from "styled-components";
import { ReactComponent as J } from "../../../../assets/icons/home 1.svg";

const Container = styled.div`
  width: 280px;
  height: 350px;
  border: none;
  position: relative;
  `;

const Img = styled.img`
`;
const Icon = styled(J)`
position: absolute;
top: 50%;
left: 30%
`;

export { Container, Img, Icon };
