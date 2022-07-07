import React, { useRef } from "react";
import {  } from "./style";
import Button from "../../components/Generic/button";
import Input from "../../components/Generic/input";
import Footer from "../../components/Footer";
import {Container, Wrapper } from "../Signin/style";

const SignUp = () => {
  const onSubmit = () => {
  };
  const emailRef = useRef("");
  const pwRef = useRef("");
  return (
    <div>
      <Container>
        <Wrapper>
          <div className="title">Sign up</div>
          <Input ref={emailRef} placeholder="Login" />
          <Input ref={emailRef} placeholder="Email" />
          <Input ref={pwRef} placeholder="Password" />
          <Input ref={emailRef} placeholder="Re-enter password" />
          <Button onClick={onSubmit} type={"primary"} width={"100%"}>
            Login
          </Button>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUp;
