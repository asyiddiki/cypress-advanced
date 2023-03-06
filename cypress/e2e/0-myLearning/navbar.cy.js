/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should display online banking content', () =>{
      
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('Should display feedback content', () =>{
        cy.visit('http://zero.webappsecurity.com/index.html')
       
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
    })

    it('Should display homepage content', () =>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})