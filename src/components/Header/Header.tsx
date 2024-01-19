import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Star Wars Characters</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Description>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  max-width: 960px;
`;

const Title = styled.h1`
  color: #333;
  font-family: Helvetica Neue;
  font-size: 54px;
  font-style: normal;
  font-weight: 300;
  line-height: 64px;
`;

const Description = styled.p`
  color: #666;
  font-family: Helvetica Neue;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0.917px;
`;
