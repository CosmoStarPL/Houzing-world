import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import Filter from "../Filter";
import { useQuery } from "react-query";
import Card from "../Cards";


const { REACT_APP_BASE_URL: url } = process.env;
const Prop = () => {
  const [data, setData] = useState([]);

  useQuery(
    "get started",
    () => fetch(`${url}v1/houses/list`).then((res) => res.json()),
    {
      onSuccess: (res) => {
        setData(res.data);
        console.log(res);
      },
    }
  );
  return (
    <Container>
      <Filter />
      <br />
      <br />
      <div className="title center">Properties</div>
      <br />
      <div className="sub-title center">
        Dolor sit, amet consectetur adipisicing elit. Accusantium, aspernatur.
      </div>
      <br />
      {/* <div className="sub-title">result {data.length}</div> */}
      <Wrapper>
        {/* {data.map((value) => {
          return <Card info={value} />;
        })} */}
      </Wrapper>
    </Container>
  );
};

export default Prop;
