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
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 1px 10px;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavTabs = styled.div`
  diplay: flex;
`;

const Image = styled.img`
  height: 60px;

  @media screen and (max-width: 1024px) {
    height: 55px;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;
const Button = styled.button`
  margin-right: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  width: 80px;
  height: 30px;
  background: #3f51b5;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    color: #3f51b5;
    background-color: #f5f5f5;
    transition: all 1s;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 25px;
    width: 75px;
    height: 25px;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    margin-right: 20px;
    width: 70px;
    height: 25px;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 481px) {
    margin-right: 10px;
    width: 55px;
    height: 20px;
    font-size: 0.7rem;
  }
`;
