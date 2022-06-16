import React from "react";
import { Container, Line, Wrapper } from "./style";
import Sale from '../../assets/imgs/sale_home.png'
import {ReactComponent as Bed} from '../../assets/icons/bed.svg'
import { ReactComponent as Bath } from '../../assets/icons/bathsvg.svg'
import { ReactComponent as Garage } from '../../assets/icons/garage.svg'
import { ReactComponent as Sq } from '../../assets/icons/sq.svg'

const Cards = () => {
  return (
    <Container>
      <div className="title">Recommended</div><br />
      <div className="sub-title">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div><br /><br />
      <Wrapper>
        <Wrapper.Item>
          <img src={Sale} alt="" />
          <Wrapper.Item.Img>
            <div className="title font-small">New Apartment Nice Wiew</div>
            <p className="sub-title font">Quincy St, Brooklyn, NY, USA</p>
            <Wrapper.Icon>
              <Bed/>
              <Bath/>
              <Garage/>
              <Sq/>
            </Wrapper.Icon>
          </Wrapper.Item.Img>
            <Line/>
        </Wrapper.Item>
        <Wrapper.Item>
          <img src={Sale} alt="" />
          <Wrapper.Item.Img>
            <div className="title font-small">New Apartment Nice Wiew</div>
            <p className="sub-title font">Quincy St, Brooklyn, NY, USA</p>
            <Wrapper.Icon>
              <Bed/>
              <Bath/>
              <Garage/>
              <Sq/>
            </Wrapper.Icon>
          </Wrapper.Item.Img>
            <Line/>
        </Wrapper.Item><Wrapper.Item>
          <img src={Sale} alt="" />
          <Wrapper.Item.Img>
            <div className="title font-small">New Apartment Nice Wiew</div>
            <p className="sub-title font">Quincy St, Brooklyn, NY, USA</p>
            <Wrapper.Icon>
              <Bed/>
              <Bath/>
              <Garage/>
              <Sq/>
            </Wrapper.Icon>
          </Wrapper.Item.Img>
            <Line/>
        </Wrapper.Item>
      </Wrapper>
    </Container>
  );
};

export default Cards;
