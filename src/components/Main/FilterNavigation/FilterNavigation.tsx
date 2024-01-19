import React, { useState, useMemo } from "react";
import styled from "styled-components";

interface FilterNavigationProps {
  onSelectFilter: (filter: string) => void;
}

const FilterNavigation: React.FC<FilterNavigationProps> = ({
  onSelectFilter,
}) => {
  const filterOptions = useMemo(() => ["All", "Planets"], []);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    setSelectedFilter(selectedFilter);
    onSelectFilter(selectedFilter);
  };

  const handleClearAll = () => {
    setSelectedFilter("All"); // Use "All" instead of "All Characters"
    onSelectFilter("All");
  };

  return (
    <FilterContainer>
      <GrayLine position="top" />
      <>
        <FilterContent>
          <label htmlFor="FilterNavigation">Filter By: </label>
          <select
            id="FilterNavigation"
            value={selectedFilter}
            onChange={handleChange}
          >
            {filterOptions.map((filter, index) => (
              <option key={index} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </FilterContent>
        <ClearAllButton type="button" onClick={handleClearAll}>
          Clear All
        </ClearAllButton>
      </>
      <GrayLine position="bottom" />
    </FilterContainer>
  );
};

const GrayLine = styled.div<{ position: "top" | "bottom" }>`
  ${(props) =>
    props.position === "top" &&
    `border-top: 1px solid #E6E6E6;
     top: 0;
     left: -50px;`}
  ${(props) =>
    props.position === "bottom" &&
    `border-top: 1px solid #E6E6E6;
     bottom: 0;
     left: -50px;`}
  border-top: 1px solid #E6E6E6;
  width: 100vw;
  position: absolute;
`;

const FilterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0;
  margin: 50px 0;
`;

const FilterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    color: #666;
    font-size: 16px;
    font-weight: 400;
    margin-right: 15px;
  }
  select {
    border: none;
    border-bottom: 1px solid #C8C8C8;
    min-width: 190px;
    max-width: 239.499px;
    padding: 0px 20px 7px 0px;
  }
`;

const ClearAllButton = styled.button`
  display: flex;
  padding: 1px 40px;
  align-items: center;
  color: #c8c8c8;
  font-size: 13.3px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  background: #ffffff;
  border: 1px solid #c8c8c8;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default FilterNavigation;
