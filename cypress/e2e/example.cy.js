describe("example spec", () => {
  it("passes", () => {
    let destination = "Porto";
    cy.visit("/index.en-gb.html");
    cy.acceptTerms();
    cy.findDestination(destination);
    cy.validateTotalProperties();
    cy.validateCheckIn();
    cy.validateCheckOut();
    cy.validatePropertiesName();
  });
});