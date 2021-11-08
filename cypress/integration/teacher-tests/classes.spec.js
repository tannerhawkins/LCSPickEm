describe("Classes", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.teacherLogin();
  });

  afterEach(async () => {
    // reset Db
    await cy.resetClassDb();
    await cy.resetUserDb();
  });

  it("allows teacher to change class", () => {
    // should be in Test Class 1
    cy.get("[data-test=class]").should("contain", "Test Class 1");

    cy.get("[data-test=class]").select("Test Class 2");

    // now in Test Class 2
    cy.get("[data-test=class]").should("contain", "Test Class 2");
  });

  it("allows teacher to add a new class", () => {
    cy.get("[data-test=add-class]").click();

    // should redirect
    cy.url().should("contain", "/create-class");

    cy.get("[data-test=name]").type("Test Class 3");

    cy.get("[data-test=description]").type("Description");

    cy.get("[data-test=create]").click();

    // should redirect
    cy.url().should("contain", "/home");

    // should automatically select new class
    cy.get("[data-test=class]").should("contain", "Test Class 3");
  });

  it("allows teacher to add a student to a class", () => {
    cy.addNewStudent();

    cy.get("[data-test=add-student]").click();

    // should redirect
    cy.url().should("contain", "/add-student");

    cy.get("[data-test=email]").type("teststudent2@apa.com");

    cy.get("[data-test=submit]").click();

    cy.get("[data-test=error]").should("contain", "Added Test Student 2 to");

    // should not redirect
    cy.url().should("contain", "/add-student");

    cy.get("[data-test=back]").click();

    // now should redirect
    cy.url().should("contain", "/home");
  });
});
