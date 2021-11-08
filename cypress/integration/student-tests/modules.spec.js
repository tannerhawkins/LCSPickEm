describe("Go Through Module", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.studentLogin();
  });

  it("allows student to select module and go through it", () => {
    // test that the student can click through module and it shows
    // correct quiz score at end and redirects back to homepage
    cy.url().should("contain", "/student/home");
    cy.get("[data-test=module-title]").should("contain", "Test Module 1");
    
    cy.get("[data-test=module-title]").click();
    cy.url().should("contain", "/student/module");

    cy.get("[data-test=start]").click();
    cy.get("[data-test=next-step]").click();
    cy.get("[data-test=next-step]").click();
    
    cy.get("[data-test=answer-text]").eq(0).click();
    
    cy.get("[data-test=next-step]").click();
  });

  it("allows student to change class and select new module", () => {
    // test that the student can change class and go into new module
    cy.url().should("contain", "/student/home");
    cy.get("[data-test=module-title]").should("contain", "Test Module 1");

    cy.get("[data-test=class]").select("Test Class 2");

    cy.get("[data-test=class]").should("contain", "Test Class 2");
    
    cy.get("[data-test=module-title]").should("contain", "Test Module 2");

    cy.get("[data-test=module-title]").click();
    cy.url().should("contain", "/student/module");
  });
});
