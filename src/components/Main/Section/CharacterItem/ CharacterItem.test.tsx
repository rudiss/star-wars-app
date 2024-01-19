import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterItem, { People } from "./CharacterItem";

test("renders character name and image", () => {
  const character: People = {
    name: "Luke Skywalker",
    imageUrl: "luke_skywalker.png",
  };

  render(<CharacterItem data={character} />);

  const nameElement = screen.getByText("Luke Skywalker");
  // Ensure the alt text matches how you construct it in your CharacterItem component
  const imageElement = screen.getByAltText(`Image of ${character.name}`);

  expect(nameElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
