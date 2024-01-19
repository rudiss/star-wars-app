import React from "react";
import Skeleton from "react-loading-skeleton";
import {
  Container,
  StatusInfo,
  StatusWrapper,
  TextWrapper,
} from "./CharacterItem";

type CharacterItemSkeletonProps = {
  data?: any;
};

const CharacterItemSkeleton: React.FC<CharacterItemSkeletonProps> = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <Container key={index}>
          <Skeleton height={230} width={430} />
          <TextWrapper>
            <Skeleton width={152} style={{ margin: "16px 0 5px" }} />
            <Skeleton width={68} />
          </TextWrapper>
          <StatusWrapper>
            <StatusInfo>
              {" "}
              <Skeleton width={78} />{" "}
            </StatusInfo>
            <StatusInfo>
              <Skeleton width={78} />
            </StatusInfo>
            <StatusInfo>
              <Skeleton width={78} />
            </StatusInfo>
          </StatusWrapper>
        </Container>
      ))}
    </>
  );
};

export default CharacterItemSkeleton;
