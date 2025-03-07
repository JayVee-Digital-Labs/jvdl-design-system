# JVDL Design System

## Description

A Common Design System to be used in JVDL Projects.

## How to Use

### Installation

To get started, install the package from npm:

```sh
npm install jvdl-design-system
```

### Importing Styles

In your project, open the app.tx, _app.js_app.tsx, or equivilent add import the compiled CSS

```ts
// Your top level App
import 'jvdl-design-system/dist/styles/index.css';
```

### Using Components

After importing the styles, you can use the provided components anywhere in your app:

```ts
// filepath: /path/to/your-nextjs-app/pages/index.tsx
import { Heading } from 'jvdl-design-system';

export default function Home() {
  return <Heading level={2}>Hello from JVDL Design System!</Heading>;
}
```

## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It ensures consistency and efficiency in design and development by providing a shared language and set of principles for teams to follow. In this project, the design system is implemented using React, Next.js, and Storybook, providing a robust and scalable solution for building UI components.

## Project Structure

The project is organized into several key directories:

### [`src`](src )

- **components/**: Contains reusable React components.
- **elements/**: Contains basic UI elements like buttons, inputs, etc.
- **stories/**: Contains Storybook stories for the components.
- **styles/**: Contains SCSS files for styling the components.
- **types/**: Contains TypeScript type definitions.

### Other Important Files and Directories

- **.husky/**: Contains Git hooks for enforcing code quality.
- **cypress/**: Contains end-to-end tests using Cypress.
- **.storybook/**: Contains Storybook configuration files.
- **public/**: Contains static assets like images and icons.
- **package.json**: Contains project dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file.
- **vitest.config.ts**: Configuration for Vitest, a testing framework.

## Available Commands

The following commands are available in the [`package.json`](package.json ):

- **`npm run build`**: Builds the Next.js application.
- **`npm run build-storybook`**: Builds the Storybook documentation.
- **`npm run commitlint`**: Runs commitlint to check commit messages.
- **`npm run dev`**: Starts the Next.js development server.
- **`npm run lint`**: Runs ESLint to check for code quality issues.
- **`npm run start`**: Starts the Storybook server.
- **`npm run storybook`**: Starts the Storybook development server.
- **`npm run test`**: Opens Cypress for running tests.
- **`npm run test:ci`**: Runs Cypress tests in CI mode.
- **`npm run test:open`**: Opens Cypress for running tests interactively.
- **`npm run prepare`**: Initializes Husky for Git hooks.

## Contribution Guidelines

We welcome contributions to the JVDL Design System! Please follow these guidelines to ensure a smooth process:

### Forking the Repository

1. Navigate to the [repository](https://github.com/your-repo-url) on GitHub.
2. Click the "Fork" button in the top-right corner to create a copy of the repository under your GitHub account.

### Getting Started

To start developing with the JVDL Design System, follow these steps:

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/your-username/jvdl-design-system.git
   cd jvdl-design-system
   ```
2. Run `npm install`
3. Start the Development Server by running `npm start`


### Create a branch

Run `git checkout -b feature/your-feature-name`

### Writing Commit Messages

We use Commitizen to standardize commit messages. Install Commitizen globally if you haven't already:
`npm install -g commitizen`

1. Stage your changes `git add .`
2. Use Commitizen to create a commit message `git cz`

### Open a Pull Request

1. Push your branch to your forked repository `git push origin feature/your-feature-name`
2. Navigate to the original repository on GitHub and click the "New pull request" button.
3. Select your branch and provide a clear description of your changes.
4. Submit the pull request for review.

## Testing

We use Cypress for end-to-end testing and snapshot testing to ensure the quality and consistency of our components.

### Running Tests

To run the tests, you can use the following commands:

- **`npm run test`**: Opens Cypress for running tests interactively.
- **`npm run test:ci`**: Runs Cypress tests in CI mode.
- **`npm run test:open`**: Opens Cypress for running tests interactively.

### Snapshot Testing

Snapshot testing is used to capture the rendered output of components and compare them to a reference snapshot. This helps in detecting any unexpected changes in the UI.

To update the snapshots, run:
```sh
npm run test:update-snapshots
```

Make sure to review the changes in the snapshots before committing them to ensure they are intentional.

### Writing Tests

Tests are located in the `cypress/` directory. Follow these guidelines when writing tests:

1. **Organize tests**: Group related tests together in descriptive files.
2. **Use descriptive names**: Name your tests clearly to describe what they are testing.
3. **Keep tests isolated**: Ensure tests do not depend on each other and can run independently.

For more information on writing tests with Cypress, refer to the [Cypress documentation](https://docs.cypress.io).
