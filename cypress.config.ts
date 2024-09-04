import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        supportFile: 'cypress/support/e2e.ts',
        baseUrl: 'http://localhost:3000',
        specPattern: 'cypress/e2e/**/*.cy.ts',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
