describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:9000");

    cy.get("p").should("include.text", "0");

    const button = cy.get("button");
    button.should("have.length", 1);
    button.click();

    cy.get("p").should("include.text", "1");
  });
});
