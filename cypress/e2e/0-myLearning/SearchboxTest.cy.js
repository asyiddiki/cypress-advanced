/// <reference types="cypress" />

describe('Searchbox Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('some test {enter}')
        
    })
    it('Should show search result page', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=some test')
        cy.get('h2').should('contain.text','Search Results:')
    })
})