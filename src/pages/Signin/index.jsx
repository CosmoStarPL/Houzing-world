import Button from "../../components/Generic/button";
import Input from "../../components/Generic/input";
import React, { useRef } from "react";
import Footer from "../../components/Footer";
import { Container, Wrapper } from "./style";
import {  useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;
const Signin = () => {
  const navigate = useNavigate('')
  const { mutate } = useMutation(
    async () => {
      const res = await fetch(`${url}public/auth/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: pwRef.current.value,
        }),
      });
      return await res.json();
    },
    {
      onSuccess: (res) => {
        localStorage.setItem("token", res.authenticationToken);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const onSubmit = () => {
    mutate();
    localStorage.getItem('token') && navigate('/home')
  };
  const emailRef = useRef("");
  const pwRef = useRef("");
  return (
    <div>
      <Container>
        <Wrapper>
          <div className="title">Sign in</div>
          <Input ref={emailRef} placeholder="Email" />
          <Input ref={pwRef} placeholder="Password" />
          <Button onClick={onSubmit} type={"primary"} width={"100%"}>
            Login
          </Button>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Signin;
