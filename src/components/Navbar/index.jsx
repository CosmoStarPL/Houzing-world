import React from "react";
import { Container, Header, Nav, Wrapper } from "./style";
import { navbar } from "../../utils/navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "../Generic";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Wrapper>
          <Link
            to="/home"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Nav.Logo />
          </Link>
          <Nav>
            {navbar.map(({ id, path, title }) => {
              return (
                <Nav.Link to={path} key={id}>
                  {title}
                </Nav.Link>
              );
            })}
          </Nav>
          <Button onClick={() => navigate("./login")} width="120px">
            Login
          </Button>
        </Wrapper>
      </Header>
      <main>
        <Outlet/>
      </main>
    </Container>
  );
};

export default Navbar;
