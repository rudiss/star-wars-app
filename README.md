# Star Wars Characters App

## Overview

The Star Wars Characters App is a React-based application that allows users to browse and filter characters and planets from the Star Wars universe. The data is fetched from the Star Wars API (SWAPI).

## Key Features

- **List Characters and Planets:** Users can view a list of characters and planets fetched from SWAPI.
- **Filtering:** Users can filter the list by selecting either "All", "Characters", or "Planets".
- **Load More:** Users can load additional data by clicking the "Load More" button, which fetches the next set of data from the API.
- **Responsive Design:** The app is designed to be responsive, providing a seamless experience on both desktop and mobile devices.

## Technical Overview

The application is built using React and styled-components for styling. It uses functional components with hooks. Key aspects include:

- **useApi Custom Hook:** Manages API calls, state for data, loading, and errors.
- **HomeworldFilter Component:** Allows users to filter data based on selection.
- **CharacterItem and PlanetItem Components:** Display the individual character and planet data.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v12 or newer)
- [npm](https://www.npmjs.com/get-npm) (usually comes with Node.js)

## Setup and Running the App

1. **Clone the Repository**

    Clone the app repository to your local machine.

    ```sh
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Install Dependencies**

    Navigate to the project directory and install the required dependencies.

    ```sh
    npm install
    ```

3. **Start the Application**

    Run the application in development mode.

    ```sh
    npm start
    ```

    The app should open and run in your default web browser. If it doesn't, you can manually visit [http://localhost:3000](http://localhost:3000).

## Folder Structure

Here's an overview of the project's folder structure:

## Components

### `App`

The main component that renders the application, including the header, filter, content section, and load more button.

### `HomeworldFilter`

A component that allows users to filter the data based on a selection (All, Characters, Planets).

### `CharacterItem` and `PlanetItem`

Components that render the individual pieces of data for characters and planets, respectively.

### `CharacterItemSkeleton`

A skeleton component displayed while data is being fetched.

## Running Tests

To run tests, use the following command:

```sh
npm test
```

# Improvement Opportunities for Star Wars Characters App

While the Star Wars Characters App provides a robust set of features and a user-friendly experience, there are always areas for improvement and enhancement. Below are some potential opportunities to elevate the application further:

## Performance Optimization

- **Lazy Loading of Images:** Implement lazy loading for character and planet images to improve page load times and enhance user experience on slower connections.
- **Code Splitting:** Utilize code splitting to load components on demand, reducing the initial load time of the application.

## Accessibility Enhancements

- **Keyboard Navigation:** Ensure all interactive elements are easily navigable using a keyboard, improving accessibility for users relying on keyboard navigation.
- **ARIA Attributes:** Enhance the use of ARIA attributes to describe elements and interactions more comprehensively, ensuring screen readers and assistive technologies can accurately interpret content.

## Feature Expansion

- **Search Functionality:** Introduce a search bar allowing users to search for specific characters or planets, enhancing the app's usability and user engagement.
- **Favorites System:** Allow users to mark characters or planets as favorites and persist these preferences using local storage or a backend service.

## User Interface and Experience

- **Dark Mode:** Implement a dark mode theme, reducing eye strain and catering to user preferences, especially in low-light environments.
- **Advanced Filtering:** Provide more granular filters (e.g., by species, gender) allowing users to refine the displayed data more precisely.

## Technical Debt and Code Quality

- **Unit and Integration Tests:** Increase the coverage of unit and integration tests to ensure stability and reduce the likelihood of regressions.
- **Dependency Upgrades:** Regularly update dependencies to the latest versions to leverage performance improvements, new features, and security patches.

## Documentation and Community

- **In-Depth Documentation:** Create more detailed documentation, including component usage, API interaction, and architecture decisions, aiding new contributors and developers in understanding the codebase.
- **Community Engagement:** Foster a community around the project by setting up discussion forums, regular contributor meetings, or feature request platforms.



