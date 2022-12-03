const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'p7kxe5',
  e2e: {
    baseUrl: "https://www.booking.com",
    defaultCommandTimeout: 10000,
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 10,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
