describe("Enroll in class", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.addNewClass();
      cy.studentLogin();
    });

    afterEach(() => {
        cy.resetUserDb();
        cy.resetClassDb();
    })
  
    it("allows student to enroll in class via enrollment code", () => {
      cy.url().should("contain", "/student/home");

      cy.get("[data-test=add-class]").click();

      // should redirect
      cy.url().should("contain", "/add-class");

      cy.get("[data-test=enrollment-code]").type("Zz666EQiFLXecsIJsjeo");

      cy.get("[data-test=submit]").click();

      // should redirect
      cy.url().should("contain", "/home");

      cy.get("[data-test=class]").should("contain", "Test Class 3");
    });
  });
  