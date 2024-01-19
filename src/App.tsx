import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import HomeworldFilter from "./components/Main/FilterNavigation/FilterNavigation";
import Header from "./components/Header/Header";
import CharacterItem, {
  People,
} from "./components/Main/Section/CharacterItem/CharacterItem";
import styled from "styled-components";
import CharacterItemSkeleton from "./components/Main/Section/CharacterItem/CharacterItemSkeleton";
import PlanetItem, {
  Planet,
} from "./components/Main/Section/CharacterItem/PlanetItem";

type Peoples = People[];
const peopleApi = "http://swapi.dev/api/people";
const planetsApi = "http://swapi.dev/api/planets";

const App: React.FC = () => {
  const [data, setData] = useState<Peoples>([]);
  const [filteredData, setFilteredData] = useState<People[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelectFilter = async (selectedFilter: string) => {
  setSelectedFilter(selectedFilter); // Update the selected filter state
  setIsLoading(true); // Set loading state to true

  let apiUrl = selectedFilter === "Planets" ? planetsApi : peopleApi;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setData(data.results);
    setFilteredData(data.results); // Update filtered data
    setNextPage(data.next); // Update nextPage for pagination
  } catch (error) {
    console.error(`Error fetching data from ${apiUrl}:`, error);
  } finally {
    setIsLoading(false); // Set loading state to false
  }
};

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await fetch(peopleApi);
        const peoplesData = await response.json();
        setData(peoplesData.results);
        setFilteredData(peoplesData.results);
        setNextPage(peoplesData.next); // Set the URL for the next page
      } catch (error) {
        console.error("Error fetching people:", error);
      }
      setIsLoading(false); // End loading
    };
    fetchData();
  }, []);

  const handleLoadMore = async () => {
  if (!nextPage) return alert("No more data to load");
  if (nextPage && !isLoading) {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch(nextPage);
      const newPeoplesData = await response.json();

      if (selectedFilter === "All" || selectedFilter === "Characters") {
        setData([...data, ...newPeoplesData.results]); // Append new data
        setFilteredData([...filteredData, ...newPeoplesData.results]); // Append new data to filtered data as well
      } else if (selectedFilter === "Planets") {
        // Here you handle appending planet data
        // This assumes you have a separate state or way to handle planet data
        // Adjust this part based on how you manage your state
        const newPlanetData = [...filteredData as Planet[], ...newPeoplesData.results];
        setFilteredData(newPlanetData);
      }

      setNextPage(newPeoplesData.next); // Update the next page URL
    } catch (error) {
      console.error("Error fetching more people:", error);
    }
    setIsLoading(false); // End loading
  }
};

  return (
    <Main>
      <Header />
      <HomeworldFilter onSelectFilter={handleSelectFilter} />
      <ContentTitle>
        {selectedFilter === "All" ? "All Characters" : `${selectedFilter}`}
      </ContentTitle>

      <ContentSection>
        {!isLoading &&
          filteredData?.map((item) => (
            <React.Fragment key={item.name}>
              {selectedFilter === "Planets" ? (
                <PlanetItem key={item.name} data={item as unknown as Planet} />
              ) : (
                <CharacterItem key={item.name} data={item} />
              )}
            </React.Fragment>
          ))}
        {isLoading && <CharacterItemSkeleton />}
      </ContentSection>
      <LoadMoreButton
        type="button"
        onClick={handleLoadMore}
        disabled={isLoading || !nextPage}
      >
        {isLoading ? "Loading..." : "Load More"}
      </LoadMoreButton>
    </Main>
  );
};

const Main = styled.main`
  margin: 80px 50px;
  @media (max-width: 768px) {
    margin: 0 25px;
  }
`;

const ContentTitle = styled.h2`
  color: #333;
  font-size: 34px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 43px;
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LoadMoreButton = styled.button`
  color: #002b53;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 46px; /* 328.571% */
  text-transform: uppercase;
  background: #ffffff;
  display: flex;
  padding: 1px 200.41px 1px 200.61px;
  align-items: center;
  border: 1px solid #002b53;
  margin: 80px auto;

  @media (max-width: 768px) {
    padding: 1px 55.41px 1px 55.61px;
  }
`;

export default App;
