import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  height: 430px;
  border-radius: 2px;
`
Wrapper.Item = styled.div`
  max-width: 380px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  height: 430px;
  border: 1px solid #E6E9EC;
  border-radius: 2px;
  `
Wrapper.Item.Img = styled.div`
  padding: 20px;
`
Wrapper.Icon = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Line = styled.div`
width: 100%;
height: 1px;
background-color: var(--secondaryColor);
`

export {
  Container,
  Wrapper,
  Line
}