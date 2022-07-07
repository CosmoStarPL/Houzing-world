import styled from "styled-components";
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";
import { ReactComponent as Navlogo } from "../../assets/icons/navLogo.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../assets/icons/email 1.svg";

const All = styled.div`
display: flex;
flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--primaryColor);
`;

const Wrapper = styled.div`
  max-width: 1440px;
  padding: 48px 30px 0 130px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .sub-title {
    width: 256px;
    margin-bottom: 20px;
  }
`;

const Icons = styled.div``;
Icons.Pin = styled(Pin)`
  position: absolute;
  /* margin-right: 50px;   */
`;
Icons.Phone = styled(Phone)`
  position: relative;
  margin-right: 50px;
  top: 30px;
`;
Icons.Email = styled(Email)`
  margin-right: 50px;
  position: relative;
  top: 25px;
`;

const Nav = styled(Navlogo)``;

const FooterOfFooter = styled.div``;
export { Container, Wrapper, FooterOfFooter, Nav, Items, Icons, All };
