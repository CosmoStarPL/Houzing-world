import Button from "../../components/Generic/button";
import Input from "../../components/Generic/input";
import React, { useRef } from "react";
import Footer from "../../components/Footer";
import { Container, Wrapper } from "./style";
import { useQueries, useMutation } from "react-query";

const { REACT_APP_BASE_URL: url } = process.env;
const Signin = () => {
  const { mutate } = useMutation(() => {
      return fetch(`${url}public/auth/login`, {method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({email: emailRef.current.value, password: pwRef.current.value})})
        .then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        localStorage.setItem('token',res.authenticationToken)
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const onSubmit = () => {
    mutate();
  };
  const emailRef = useRef("");
  const pwRef = useRef("");
  return (
    <Container>
      <Wrapper>
        <div className="title">Sign in</div>
        <Input ref={emailRef} placeholder="Email" />
        <Input ref={pwRef} placeholder="Password" />
        <Button onClick={onSubmit} type={"primary"} width={"100%"}>
          Login
        </Button>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Signin;
