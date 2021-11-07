describe("Go Through Module", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.teacherLogin();
  });

  it("allows teacher to change class", () => {
    // should be in Test Class 1
    cy.get("[data-test=class]").should("contain", "Test Class 1");

    cy.get("[data-test=class]").select("Test Class 2");

    // now in Test Class 2
    cy.get("[data-test=class]").should("contain", "Test Class 2");
  });

  it.only("allows teacher to add a new class", () => {
    // test that the student can change class and go into new module
    cy.resetClassDb();
  });
});
