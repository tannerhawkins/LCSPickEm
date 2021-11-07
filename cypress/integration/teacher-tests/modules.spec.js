
describe('Go Through Module', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.teacherLogin()
      })

    it('allows teacher to change class', () => {
        cy.get("[data-test=class]").first().click()

    })

    it('allows student to change class and select new module', () => {
        // test that the student can change class and go into new module
    })
  })
