import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 3000,
  defaultCommandTimeout: 5000,
  viewportWidth: 1500,
  viewportHeight: 942,
  numTestsKeptInMemory: 0,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  env: {
    appUrl: 'http://localhost:3000',
    apiUrl: 'https://itunes.apple.com',
  },
  e2e: {
    testIsolation: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
