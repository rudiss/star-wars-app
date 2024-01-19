import React from 'react';
import styled from 'styled-components';
import CharacterImage from './CharacterImage';
import CharacterName from './CharacterName';

export interface Planet {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

type PlanetItemProps = {
  data: Planet;
};


const PlanetItem: React.FC<PlanetItemProps> = ({ data }) => {

  return (
    <Container>
      <CharacterImage
        imageUrl={`https://picsum.photos/seed/${data?.orbital_period === 'unknown' ? 400 : data?.orbital_period}/${data?.orbital_period === 'unknown' ? 250 : data?.orbital_period}?grayscale`} altText={''} />
      <TextWrapper>
        <CharacterName name={data.name} />
      </TextWrapper>
      <StatusWrapper>
        <StatusInfo>Population - {data?.population }</StatusInfo>
        <StatusInfo>Climate - {data?.climate }</StatusInfo>
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

export default PlanetItem;
