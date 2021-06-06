import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Image src="/images/logo.png" />
        </Link>
      </LogoContainer>
      <NavTabs>
        <Link to="/">
          <Button>List</Button>
        </Link>
        <Link to="/new">
          <Button>New</Button>
        </Link>
      </NavTabs>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 20px;
  background: #f1f1f1;
`;
const LogoContainer = styled.div``;
const NavTabs = styled.div`
  display: flex;
  margin: 0 10px;
  align-items: center;
`;

const Image = styled.img`
  height: 60px;
`;
const Button = styled.button`
  margin-right: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  width: 80px;
  background: #3f51b5;
  height: 30px;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    color: #3f51b5;
    background-color: #f5f5f5;
    transition: all 1s;
  }
`;
