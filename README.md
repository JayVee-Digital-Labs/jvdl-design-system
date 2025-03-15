# JVDL Design System

## Description

A Common Design System to be used in JVDL Projects. If you happen to stumble upon this, feel free to use, **But I will not get back to any feature requests, bug but requests will be evaluated first**. _This is really for internal use. If you really need to use and modify this project, please fork or contact me_

## How to Use

### Installation

To get started, install the package from npm:

```sh
npm install @jayvee-digital-labs/design-system
```

### Importing Styles

In your project, open the app.tx, \_app.js_app.tsx, global styles, or top level file ans add import the compiled CSS

```ts
// Your top level App
import '@jayvee-digital-labs/design-system/dist/index.css';
```

### Using Components

After importing the styles, you can use the provided components anywhere in your app:

```ts
// filepath: /path/to/your-nextjs-app/pages/index.tsx
import { Heading } from '@jayvee-digital-labs/design-system;

export default function Home() {
  return <Heading level={2}>Hello from JVDL Design System!</Heading>;
}
```

## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It ensures consistency and efficiency in design and development by providing a shared language and set of principles for teams to follow. In this project, the design system is implemented using React, Next.js, and Storybook, providing a robust and scalable solution for building UI components.

## Project Structure

The project is organized into several key directories:

### [`src`](src)

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

The following commands are available in the [`package.json`](package.json):

- **`npm run build`**: Cleans the `dist` directory and builds the design system and styles.
- **`npm run build-storybook`**: Builds the Storybook documentation.
- **`npm run build:design-system`**: Builds the design system using Rollup.
- **`npm run build:styles`**: Builds the styles using Sass.
- **`npm run commitlint`**: Runs commitlint to check commit messages.
- **`npm run deploy`**: Deploys the project using Firebase.
- **`npm run dev`**: Starts the Next.js development server.
- **`npm run lint`**: Runs ESLint to check for code quality issues.
- **`npm run prepare`**: Initializes Husky for Git hooks.
- **`npm run publish:local`**: Runs the publish-changes script to run tests, update version, create a git tag, push changes, deploy to Firebase, and publish to NPM. \*\*ONLY DO THIS IF CI/CD IS DOWN OR DOES NOT EXIST - RUN ONLY WITH ONE COMMIT CHANGE (`feat`, `fix`, `feat!` only allowed)
- **`npm run start`**: Starts the Storybook server.
- **`npm run storybook`**: Starts the Storybook development server.
- **`npm run test`**: Opens Cypress for running tests interactively.
- **`npm run test:ci`**: Runs Cypress tests in CI mode.
- **`npm run test:open`**: Opens Cypress for running tests interactively.
- **`npm run test:open:update`**: Opens Cypress for running tests interactively with snapshot updates.
- **`npm run test:vr`**: Runs visual regression tests using the `*.vr.cy.ts` files.
- **`npm run test:vr:specific`**: Runs visual a pattern regression tests using the `*.vr.cy.ts` files. Example: `npm run test:vr:specific -- **/**/text-align.vr.cy.tsx`
- **`npm run docker:test`**: Builds and runs the Docker container for Cypress tests using the Dockerfile, which by default runs the visual regression tests.

## Contribution Guidelines

We welcome contributions to the JVDL Design System! Please follow these guidelines to ensure a smooth process:

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: It's recommended to use Node Version Manager (nvm) to manage Node.js versions. You can install the required Node.js version specified in the `.nvmrc` file by running:

  ```sh
  nvm install
  nvm use
  ```

- **Firebase CLI**: To deploy Storybook properly, you will need the Firebase CLI. Install it globally using npm:

  ```sh
  npm install -g firebase-tools
  ```

- **Docker**: For running end-to-end tests in a containerized environment, install Docker Desktop.
  - **macOS**: Download and install Docker Desktop from [Docker's website](https://www.docker.com/products/docker-desktop).
  - Once installed, verify by running:
    ```sh
    docker --version
    ```

Make sure to authenticate with Firebase by running:

```sh
firebase login
```

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
npm run test:open:update
```

Make sure to review the changes in the snapshots before committing them to ensure they are intentional.

### Writing Tests

Tests are located in the `cypress/` directory. Follow these guidelines when writing tests:

1. **Organize tests**: Group related tests together in descriptive files.
2. **Use descriptive names**: Name your tests clearly to describe what they are testing.
3. **Keep tests isolated**: Ensure tests do not depend on each other and can run independently.

For more information on writing tests with Cypress, refer to the [Cypress documentation](https://docs.cypress.io).

### Test File Conventions

- **`*.cy.ts` Files**:  
  Use these files for standard end-to-end testing with Cypress. They are intended for testing the functionality and behavior of your application.

- **`*.vr.cy.ts` Files**:  
  These files are used for visual regression (VR) testing. They capture UI snapshots and compare them against a baseline to detect unintended visual changes. Use these tests whenever you need to ensure that UI changes are intentional and that the app’s appearance remains consistent.

## Deployment Steps

1. Initialize Firebase in your project:

   ```sh
   firebase init
   ```

   - Select "Hosting" and follow the prompts to set up your project.
   - Choose the existing Firebase project or create a new one.
   - Set the public directory to `build` (or the directory where your build output is located).
   - Configure as a single-page app (if applicable).

2. Build your project:

   ```sh
   npm run build
   ```

3. Deploy to Firebase Hosting:
   ```sh
   firebase deploy
   ```

Your project should now be live on Firebase Hosting. For more information, refer to the [Firebase Hosting documentation](https://firebase.google.com/docs/hosting).
