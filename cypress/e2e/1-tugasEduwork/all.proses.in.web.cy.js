/// <reference types="cypress" />

describe('All proses in web', () => {
	before(() => {
		cy.visit('https://www.saucedemo.com/')
	})
	it('Should login to application with valid data', () => {
		cy.fixture('user.json').then(user => {
			const username = user.usernameSD
			const password = user.passwordSD
			// login using custom commands
			cy.loginSD(username, password)
		})

	it('Add filter', () => {
			cy.get('.product_sort_container').click()
			cy.get('.title').should('have.text', 'Feedback')
			//cy.get('h1').should('be.visible')

			//clicking the add to cart button
			cy.get('#add-to-cart-sauce-labs-backpack').contains('Add to cart').click()

			// assert the cart button
			cy.get('.shopping_cart_link').click()
			cy.get('.inventory_item_price').should('contain.text', '$')

			// Checkout the product
			cy.get('[data-test="checkout"]').click()
			cy.get('.title').should('contain.text', 'Checkout: Your Information')

			// logout
        it('Should logout from the application', () => {

                cy.fixture("user").then(user => {
                    const username = user.username
                    const password = user.password
                    
                    //login(file command.js)
                    cy.login(username, password)
                   
                    cy.contains('username').click()
                    cy.get('.bm-burger-button').click()
                    cy.get('strong').should('contain.text', 'Home')
                })
		    })
	    })
    })
})