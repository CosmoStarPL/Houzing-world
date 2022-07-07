import React from "react";
import { Container, Header, Nav, Wrapper } from "./style";
import { navbar } from "../../utils/navbar";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../Generic";
import { useNavigate, useLocation } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate('') 
  const Location = useLocation('')
  const on = ()=>{
    navigate('/signin')
  }
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
            {navbar.map(({ id, path, title, hidden }) => {
              return (
                !hidden && (
                  <Nav.Link to={path} key={id}>
                    {title}
                  </Nav.Link>
                )
              );
            })}
          </Nav>
          {
            Location.pathname !== '/signin' && <Button onClick={on} width="120px" >Login</Button> || <Button onClick={()=>{navigate('/signup')}} width="120px" >Sign Up</Button>
          }
        </Wrapper>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Navbar;
