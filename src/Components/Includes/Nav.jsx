import React from "react";
import styled from "styled-components";
function Nav() {
  return (
    <>
      <Container>
        <FlexContainer>
          <Logo>
            <Image src={require("../assets/images/logo.webp")} />
          </Logo>
          <Button>Login</Button>
        </FlexContainer>
      </Container>
    </>
  );
}
const Container = styled.header`
  padding: 20px 0px;
`;
const FlexContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 170px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Button = styled.button`
  padding: 15px 48px;
  font-size: 19px;
  font-weight: 600;
  display: inline-block;
  background: #f70142;
  transition: background-color ease 0.5s;
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: black;
  }
`;
export default Nav;
