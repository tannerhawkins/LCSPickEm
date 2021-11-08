describe("Modules", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.teacherLogin();
  });

  afterEach(async () => {
    await cy.resetUserDb();
    await cy.resetClassDb();
    await cy.resetModulesDb();
  });

  it("allows teacher create new module", () => {
    cy.url().should("contain", "/teacher/home");
    cy.get("[data-test=add-module]").click();

    // should redirect
    cy.url().should("contain", "/add-module");

    // should show modules that are not in current class
    cy.get("[data-test=module-title]").should("contain", "Test Module 2");

    cy.get("[data-test=create-module]").click();

    // should redirect
    cy.url().should("contain", "/create-module");

    cy.get("[data-test=title]").type("Test Module 3");
    cy.get("[data-test=description]").type("Description");

    cy.get("[data-test=add-step]").click();

    cy.get("[data-test=add-text]").click();

    // should redirect
    cy.url().should("contain", "/edit-text");

    cy.get("[data-test=editor]").type("Hello World!");
    cy.get("[data-test=submit]").click();

    // should redirect
    cy.url().should("contain", "/create-module");

    // first step should be a text step
    cy.get("[data-test=step-container]")
      .children()
      .first()
      .should("contain", "text");

    cy.get("[data-test=add-step]").click();

    cy.get("[data-test=add-video]").click();

    // should redirect
    cy.url().should("contain", "/edit-video");

    cy.get("[data-test=video]").type(
      "https://www.youtube.com/watch?v=sKrsE2lBhu4&ab_channel=Coldplay"
    );
    cy.get("[data-test=submit]").click();

    // should redirect
    cy.url().should("contain", "/create-module");

    // first step should be a video step
    cy.get("[data-test=step-container]")
      .children()
      .eq(1)
      .should("contain", "video");

    cy.get("[data-test=add-step]").click();

    cy.get("[data-test=add-quiz]").click();

    // should redirect
    cy.url().should("contain", "/edit-quiz");

    // should not allow submission of quiz with no questions
    cy.get("[data-test=submit]").should("not.exist");

    cy.get("[data-test=add-question]").click();

    cy.get("[data-test=add-answer]").click();

    cy.get("[data-test=question]").type("Question 1");

    cy.get("[data-test=answer]").eq(0).type("Answer 1");

    cy.get("[data-test=answer]").eq(1).type("Answer 2");

    cy.get("[data-test=answer]").eq(2).type("Answer 3");

    cy.get("[data-test=is-correct]").eq(2).click();

    cy.get("[data-test=submit-question]").click();

    // should create question card of question we just made
    cy.get("[data-test=question-text]").should("contain", "Question 1");
    cy.get("[data-test=answer-text]").eq(0).should("contain", "Answer 1");
    cy.get("[data-test=answer-text]").eq(1).should("contain", "Answer 2");
    cy.get("[data-test=answer-text]").eq(2).should("contain", "Answer 3");

    cy.get("[data-test=submit]").click();

    // should redirect
    cy.url().should("contain", "/create-module");

    cy.get("[data-test=create]").click();

    // should redirect
    cy.url().should("contain", "/home");

    cy.wait(2000);

    // module should now be assigned to class
    cy.get("[data-test=module-title]")
      .last()
      .should("contain", "Test Module 3");
  });

  it("allows teacher to add previously created module", () => {
    cy.url().should("contain", "/teacher/home");

    cy.get("[data-test=add-module]").click();

    cy.get("[data-test=module-title]").click();

    // should remove module
    cy.get("[data-test=module-title]").should("not.exist");

    cy.get("[data-test=back]").click();

    cy.get("[data-test=module-title]")
      .last()
      .should("contain", "Test Module 2");
  });
});
