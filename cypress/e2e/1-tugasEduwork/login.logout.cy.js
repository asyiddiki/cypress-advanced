/// <reference types="cypress" />

describe('Login & Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })
    it('Should logout from the application', () => {

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            //login(file command.js)
            cy.login(username, password)
           
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.get('strong').should('contain.text', 'Home')
            //cy.get('h4').should('be.visible')
        });
    })
})