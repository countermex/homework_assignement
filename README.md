# Prerequisites

Node.js v20.15.0

## Project Installation

To install project dependencies:
  - yarn

## Starting the Project

To run the project:
  - yarn dev

## Running Tests

To run the tests:
 - yarn dev
 - npx cypress run

### Table Component API

rows - Represents the data of the table: 
  - Type: { [key: string]: string }[]
  - Required: Yes

headers - Array of strings, generating the header columns
  - Type: string[]
  - Required: Yes

selectable - boolean whether the rows should have a selectbox
  - Type: boolean
  - Required: No

selected - ID representation of selected rows
  - Type: string[]
  - Required: No

caption - A string to be displayed as the table caption.
  - Type: string
  - Required: No

capitalizedCells - Strings representing the columns whose cells should be capitalized.
  - Type: string[]
  - Required: No

highlightedCells - Strings representing the values cells for which cells should be highlighted
  - Type: string[]
  - Required: No

onSelect - Callback function when selection changes
  - Type: (selected: string[]) => void
  - Required: No

### Styling

The component uses CSS modules for styles

### Next Steps/Outlook

Extend Test coverage to further enhance robustness and reliability. Due to time constraints only e2e tests were conducted, covering the most important functionalities. 
  - Implement Unit Tests
  - Implement Integration Tests