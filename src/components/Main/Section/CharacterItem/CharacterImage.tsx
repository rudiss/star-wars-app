import React from "react";
import styled from "styled-components";

interface CharacterImageProps {
  imageUrl?: string;
  altText?: string;
}

const CharacterImage: React.FC<CharacterImageProps> = ({
  imageUrl,
  altText,
}) => {
  return <Image src={imageUrl} alt={`Image of ${altText}`} />;
};

const Image = styled.img`
  max-width: 432.5px;
  width: 100%;
  height: 230px;

  @media (max-width: 768px) {
    max-width: 115px;
    height: 130px;
  }
`;

export default CharacterImage;
