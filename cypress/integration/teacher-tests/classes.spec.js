describe("Classes", () => {
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
        cy.get("[data-test=add-class]").click()
  
        // should redirect
        cy.url().should("contain", "/create-class")
  
        cy.get("[data-test=name]").type("Test Class 3")
  
        cy.get("[data-test=description]").type("Description")
  
        cy.get("[data-test=create]").click()
  
        // should redirect
        cy.url().should("contain", "/home")
  
        // should automatically select new class
        cy.get("[data-test=class]").should("contain", "Test Class 3");
  
        // reset Db
        cy.resetClassDb();
    });
  });