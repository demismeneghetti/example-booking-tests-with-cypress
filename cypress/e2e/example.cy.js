describe("example spec", () => {
  
  beforeEach(() => {
    cy.visit("/index.en-gb.html");
  });
  
  it("Search properties and select interval date.", () => {
    let destination = "Porto";
    cy.acceptTerms();
    cy.findDestination(destination);
    cy.validateTotalProperties();
    cy.validateCheckIn();
    cy.validateCheckOut();
    cy.validatePropertiesName();
  });
});