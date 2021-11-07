describe("Go Through Module", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.studentLogin();
  });

  it("allows student to select module and go through it", () => {
    // test that the student can click through module and it shows
    // correct quiz score at end and redirects back to homepage
  });

  it("allows student to change class and select new module", () => {
    // test that the student can change class and go into new module
  });
});
