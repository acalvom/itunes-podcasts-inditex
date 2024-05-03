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
    // https://api.allorigins.win/get?url=https%3A%2F%2Fitunes.apple.com%2Fus%2Frss%2Ftoppodcasts%2Flimit%3D100%2Fgenre%3D1310%2Fjson
  },
  e2e: {
    testIsolation: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
