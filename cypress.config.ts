import { defineConfig } from "cypress"
import { configureVisualRegression } from 'cypress-visual-regression/dist/plugin'

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    env: {
      visualRegressionType: 'regression'
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on) {
      configureVisualRegression(on)
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
