describe('Sign-up', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it.only('allows user to naviagate to sign-up page and sign-up', () => {
        cy.get('[data-test=login-logout]').click()
        cy.get('[data-test=sign-up]').click()
        cy.get('[data-test=first-name]').type("Test")
        cy.get('[data-test=last-name]').type("Teacher")
        cy.get('[data-test=email]').type("testteacher@apa.com")
        cy.get('[data-test=password]').type("Testing")
        cy.get('[data-test=confirm-password]').type("Testing")
        cy.get('[data-test=teacher]').click()
        cy.get('[data-test=submit]').click()

        cy.url().should('contain', '/home')
    })

    afterEach(() => cy.Logout())
  })

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
      })


    it('allows user to naviagate to login page and login', () => {
        cy.get('[data-test=login-logout]').click()


    })
  })