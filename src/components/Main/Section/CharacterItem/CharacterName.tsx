import React from "react";
import styled from "styled-components";

interface CharacterNameProps {
  name?: string;
}

const CharacterName: React.FC<CharacterNameProps> = ({ name }) => {
  return <Name>{name}</Name>;
};

const Name = styled.h2`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin: 0;
`;

export default CharacterName;
