import React from 'react';
import styled from 'styled-components';
import CharacterImage from './CharacterImage';
import CharacterName from './CharacterName';
import HomeworldName from './HomeworldName';

export interface People {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: any[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
  imageUrl?: string;
}

type CharacterItemProps = {
  data: People;
};

const getHomeworldFromUrl = (url: string) => {
  const match = RegExp(/\/api\/planets\/(\d+)\/$/).exec(url);
  return match ? match[1] : null;
};

const CharacterItem: React.FC<CharacterItemProps> = ({ data }) => {
  const homeworldId = getHomeworldFromUrl(data?.homeworld as string);

  return (
    <Container>
      <CharacterImage
        imageUrl={`https://picsum.photos/seed/${data?.height === 'unknown' ? 400 : data?.height}/${data?.height === 'unknown' ? 250 : data?.height}?grayscale`}
        altText={data?.name} />
      <TextWrapper>
        <CharacterName name={data.name} />
        <HomeworldName homeworldId={homeworldId} />
      </TextWrapper>
      <StatusWrapper>
        <StatusInfo>Height - {data?.height}</StatusInfo>
        <StatusInfo>Mass - {data?.mass}</StatusInfo>
        <StatusInfo>Gender - {data?.gender}</StatusInfo>
      </StatusWrapper>
    </Container>
  );
};

export const TextWrapper = styled.div`
`;

export const StatusWrapper = styled.div`
  margin-top: 13px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StatusInfo = styled.div`
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Container = styled.div`
  text-align: left;
  @media (max-width: 768px) {
    align-items: flex-start;
    display: flex;
    gap: 12px;
  }
`;

export default CharacterItem;
