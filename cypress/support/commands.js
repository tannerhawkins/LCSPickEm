// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { useDispatch } from "react-redux"
import { auth, userDataDb } from "../../src/data/firebase"


Cypress.Commands.add('createTeacher', () => {
    auth
      .createUserWithEmailAndPassword("testteacher@apa.com", "testing")
      .then(() => {
        // updates account with user display name
        auth.currentUser
          .updateProfile({
            displayName: `Test Teacher`,
          })
          .then(() => {
            const accountInfo = {
                    email: auth.currentUser.email,
                    uid: auth.currentUser.uid,
                    classList: [],
                    displayName: `Test Teacher`,
                    accountType: "teacher",
                    moduleList: [],
                  }
            dispatch(signIn(accountInfo));
            dispatch(setCurrentClass(null));
            userDataDb.doc(auth.currentUser.uid).set(accountInfo);
          });
      })
})

Cypress.Commands.add('createStudent', () => {
    auth
      .createUserWithEmailAndPassword("teststudent@apa.com", "testing")
      .then(() => {
        // updates account with user display name
        auth.currentUser
          .updateProfile({
            displayName: `Test Student`,
          })
          .then(() => {
            const accountInfo = {
                    email: auth.currentUser.email,
                    uid: auth.currentUser.uid,
                    classList: [],
                    displayName: `Test Student`,
                    accountType: "student",
                    moduleList: [],
                  }
            dispatch(signIn(accountInfo));
            dispatch(setCurrentClass(null));
            userDataDb.doc(auth.currentUser.uid).set(accountInfo);
          });
      })
})

Cypress.Commands.add('teacherLogin', () => {
    cy.get('[data-test=login-logout]').click()
    cy.get('[data-test=email]').type("testteacher@apa.com")
    cy.get('[data-test=password]').type("Testing")
    cy.get('[data-test=submit]').click()
})

Cypress.Commands.add('studentLogin', () => {
    cy.get('[data-test=login-logout]').click()
    cy.get('[data-test=email]').type("teststudent@apa.com")
    cy.get('[data-test=password]').type("Testing")
    cy.get('[data-test=submit]').click()
})

Cypress.Commands.add('deleteAccount', (user) => {
    userDataDb.deleteDoc(user.uid);
    user.delete()
})