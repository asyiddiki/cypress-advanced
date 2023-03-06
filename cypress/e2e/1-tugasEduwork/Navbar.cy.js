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
        cy.get('#feedback-title').should('have.text', 'Feedback')

    })
    it('Should try input to feedback', () => {
        cy.visit('http://zero.webappsecurity.com')
        cy.contains('Feedback').click()

        cy.fixture("user").then(user => {
            const name = user.name
            const email = user.email
            const subject = user.subject
            const comment = user.comment

            cy.feedback(name, email, subject, comment)
            cy.contains("Send Message").click()
            cy.url().should('include', '/sendFeedback.html')

                })
            })
        })

    it('Should display homepage content', () =>{
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('have.text', 'Feedback')
    })
        //assertion (pelajari lagi)
        it('Should display homepage content', () =>{
            cy.visit('http://zero.webappsecurity.com/index.html')
            cy.contains('Zero Bank').click()
            cy.url().should('include', 'index.html')
        
        })
