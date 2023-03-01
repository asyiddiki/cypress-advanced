// <reference types="cypress" />

describe('Searchbox Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html',)
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('banking {enter}')
        cy.get('h2').should('contain.text','Search Results:')
    })
    it('Should check for correct element on the page', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online',)
        cy.get('h2').should('have.text','Search Results:');
        cy.get('a').should('be.visible')
    })

    it('clicking Zero - Free Access to Online Banking navigate to a new url', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online',)
        cy.get('a').contains('Zero - Free Access to Online Banking').click();
        
    })
})
