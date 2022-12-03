// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("acceptTerms", () => {
  cy.get("[id=onetrust-accept-btn-handler]").should("be.visible").click();
});

Cypress.Commands.add("validatePropertiesName", () => {
  let propertiesName = [];
  cy.xpath("//h3/a/div[1]").each((property) => {
    propertiesName.push(property.text());
  });
  cy.log("Property name:", propertiesName);
});

Cypress.Commands.add("validateTotalProperties", () => {
  cy.get("h1").then((element) => {
    const totalPropertiesFound = parseInt(
      element
        .text()
        .replace(",", "")
        .match(/[0-9]+/)[0]
    );
    expect(totalPropertiesFound).to.be.greaterThan(0);
    cy.log("Total number of properties found", totalPropertiesFound);
  });
});

Cypress.Commands.add("validateCheckIn", () => {
  cy.xpath("//form//div[3]//button")
    .eq(0)
    .then((element) => {
      const checkinDay = parseInt(
        element
          .text()
          .replace(",", "")
          .match(/[0-9]+/)[0]
      );
      expect(checkinDay).to.be.greaterThan(0);
      cy.log("Check-in day", checkinDay);
    });
});

Cypress.Commands.add("validateCheckOut", () => {
  cy.xpath("//form//div[3]//button")
    .eq(1)
    .then((element) => {
      const checkoutDay = parseInt(
        element
          .text()
          .replace(",", "")
          .match(/[0-9]+/)[0]
      );
      expect(checkoutDay).to.be.greaterThan(0);
      cy.log("Check-out day", checkoutDay);
    });
});


Cypress.Commands.add('findDestination', (destination) => {
  cy.get("[name=ss]").wait(5000).type(destination);
  cy.xpath(`//form//div/ul/li//*[.="${destination}"]`).click();
  cy.xpath("//div[2]/table//td/span").eq(0).click();
  cy.xpath("//div[2]/table//td/span").eq(6).click();
  cy.get("button").contains("Search").click();
});
