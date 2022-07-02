import React from "react";
import { Container, Icons, Items, Wrapper, Nav, All } from "./style";

const Footer = () => {
  return (
    <All>
      <Container>
        <Wrapper>
          <div className="title color font-small">Contact Us</div>
          <br />
          <br />
          <Items>
            <div className="sub-title color">
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </div>
            <div className="sub-title color">123 456 7890</div>
            <div className="sub-title color">support@houzing.com</div>
          </Items>
        </Wrapper>
        <Wrapper>
          <div className="title color font-small">Discover</div>
          <br />
          <br />
          <Items className="he">
            <div className="sub-title color">Chicago</div>
            <div className="sub-title color">Los Angeles</div>
            <div className="sub-title color">Miami</div>
            <div className="sub-title color">New York</div>
          </Items>
        </Wrapper>
        <Wrapper>
          <div className="title color font-small">Lists by Category</div>
          <br />
          <br />
          <Items className="he">
            <div className="sub-title color">Apartments</div>
            <div className="sub-title color">Condos</div>
            <div className="sub-title color">Houses</div>
            <div className="sub-title color">Offices</div>
            <div className="sub-title color">Reatil</div>
            <div className="sub-title color">Villas</div>
          </Items>
        </Wrapper>
        <Wrapper>
          <div className="title color font-small">Lists by Category</div>
          <br />
          <br />
          <Items className="he">
            <div className="sub-title color">About Us</div>
            <div className="sub-title color">Terms & Conditions</div>
            <div className="sub-title color">Support Center</div>
            <div className="sub-title color">Contact Us</div>
          </Items>
        </Wrapper>
      </Container>
    </All>
  );
};

export default Footer;
