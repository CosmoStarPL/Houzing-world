import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #F5F7FC;
  margin-top: 100px;
  padding: 70px;
  .title{
    text-align: center;
  }
  `;

const Wrapper = styled.div`
margin-bottom: 500px;
width: 100%;
max-width: 1600px;
margin-left: 210px;
display: flex;
align-items: center;
justify-content: space-evenly;
`
Wrapper.Item = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
width: 270px;
`

export {
  Container,
  Wrapper
}