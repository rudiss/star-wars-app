import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface HomeworldNameProps {
  homeworldId: string | null;
}

const HomeworldName: React.FC<HomeworldNameProps> = ({ homeworldId }) => {
  const [homeworld, setHomeworld] = useState<string>('');

    useEffect(() => {
    const fetchHomeworld = async () => {
      try {
        const response = await fetch(`http://swapi.dev/api/planets/${homeworldId}`);
        const planetsData = await response.json();
        setHomeworld(planetsData.name);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchHomeworld();
    }, [homeworldId]);

  return <Homeworld>{homeworld}</Homeworld>;
};

const Homeworld = styled.h3`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default HomeworldName;
