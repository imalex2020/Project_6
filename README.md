# README.md for Project 6 - Pagination Function Testing

## Introduction

This README file provides instructions for setting up and running the automated tests for Project 6, which focuses on testing the pagination functionality on the webpage [TechGlobal Training - Project 5](https://techglobal-training.com/frontend/project-5). The tests utilize the Cucumber framework and Cypress for efficient execution.

## Project Features

- Tests the presence of essential elements: "Pagination" heading, "World City Populations 2022" heading, and introductory paragraph.
- Validates the functionality of the "Next" and "Previous" buttons, including initial states and transitions after clicking.
- Confirms the display of city information with an image for each page of the pagination.

## Prerequisites

- Node.js
- NPM
- Cypress (version 10 or higher)
- GIT (optional)

## Setting Up the Project

- Clone the project repository:
  - If using GIT, clone the repository to your local machine.
  - Alternatively, download the project files as a ZIP archive and extract them.

- Install dependencies:
  - Open a terminal and navigate to the project directory.
  - Run the following command to install project dependencies:
    ```
    npm install
    ```
    This will install Cucumber, Cypress, and other required libraries.

- Configure Cypress (optional):
  - If you haven't already, follow Cypress installation instructions and configure your Cypress settings.
  - This ensures proper browser launch and execution environment.

## Running Tests

- Start the Cypress test runner:
  - Open a terminal and navigate to the project directory.
  - Run the following command:
    ```
    npx cypress open
    ```
    This will launch the Cypress test runner in your browser.

- Run the Feature File:
  - In the Cypress test runner, select the feature file named "TGPagination.feature".
  - Click the "Run" button to execute all test scenarios within the feature file.

## Expected Results

- All test scenarios should pass successfully, indicating that the pagination functionality works as intended.
- The Cypress test runner will display detailed results for each scenario, including screenshots and logs for any failures.

## Additional Information

- The project utilizes the `cypress-wait-until` plugin to enhance test stability and waiting behavior.
- The `.eslintrc` file ensures consistent code formatting and quality throughout the project.

## Further Steps

- Modify or extend the existing test scenarios to cover additional aspects of the functionality.
- Explore integrating the tests into a continuous integration pipeline for automated execution.

## Contributing

- This is an open-source project. Feel free to contribute by proposing pull requests with improved test cases, code enhancements, or documentation updates.
