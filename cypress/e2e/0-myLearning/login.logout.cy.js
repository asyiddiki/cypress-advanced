/// <reference types="cypress" />

describe('Login & Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })
    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalide username')
        cy.get('#user_password').type('invalide password')
        cy.contains('Sign in').click()

        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })
    //it('Should display error message', ()=> {
    //    cy.visit('http://zero.webappsecurity.com/login.html');
    //    cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    //})
    it('Should login to application with valid data', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)
            cy.get('input[name="submit"]').click()
            
            cy.get('h2').should('contain.text', 'Cash Accounts')
        })

        cy.get('ul.nav-tabs').should('be.visible')
    
    })

    it('Should logout from the application', () => {
        cy.visit('http://zero.webappsecurity.com')
        cy.get("#signin_button").click()

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            //login
            cy.login(username, password)
           
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.get('strong').should('contain.text', 'Home')
        });

      
    })
})