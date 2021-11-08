import { auth } from "../../../src/data/firebase";

describe("Sign-up", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(async () => {
    await cy.resetUserDb();
  });

  it("allows user to naviagate to sign-up page and sign-up", () => {
    cy.get("[data-test=login-logout]").click();
    cy.get("[data-test=sign-up]").click();
    cy.get("[data-test=first-name]").type("Test");
    cy.get("[data-test=last-name]").type("Student 2");
    cy.get("[data-test=email]").type("teststudent2@apa.com");
    cy.get("[data-test=password]").type("Testing");
    cy.get("[data-test=confirm-password]").type("Testing");
    cy.get("[data-test=student]").click();
    cy.get("[data-test=submit]").click();

    // redirects to dashboard
    cy.url().should("contain", "/home");

    // properly updates header
    cy.get("[data-test=display-name]").should("contain", "Test Student 2");

    // properly sets account type
    cy.get("[data-test=account-type]").should("contain", "student");

    auth
      .signInWithEmailAndPassword("teststudent2@apa.com", "Testing")
      .then((result) => {
        auth.currentUser.delete();
      });
  });
});

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("allows user to naviagate to login page and login", () => {
    cy.get("[data-test=login-logout]").click();
    cy.get("[data-test=email]").type("testteacher@apa.com");
    cy.get("[data-test=password]").type("Testing");
    cy.get("[data-test=submit]").click();

    // redirects to dashboard
    cy.url().should("contain", "/home");

    // properly updates header
    cy.get("[data-test=display-name]").should("contain", "Test Teacher");

    // properly sets account type
    cy.get("[data-test=account-type]").should("contain", "teacher");
  });
});
