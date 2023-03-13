/// <reference types="cypress" />


describe('Testing Saucedemo Features', () => {


    before(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    it('Should Login Using Valid Data', () => {
        // using user valid data in fixture
        cy.fixture("example").then(user =>{
        const username = user.standard_user.username
        const password = user.standard_user.password


        // login using custom commands
        cy.loginSauceDemo(username,password)


        //Assert the standard user login
        cy.url().should('include', 'inventory.html')
        })
    });


    it('Login using Invalid data', () => {
        // using user invalid data in fixture
        cy.fixture("example").then(user =>{
            const username = user.invalidUser.username
            const password = user.invalidUser.password
   
            // login using custom commands
            cy.loginSauceDemo(username,password)


            //assert the error alert
            cy.get('h3').should('contain.text', 'Epic sadface')
        })
    });


    it('Add product to Cart ', () => {
        //   using user valid data in fixture
        cy.fixture("example").then(user =>{
        const username = user.standard_user.username
        const password = user.standard_user.password


        // login using custom commands
        cy.loginSauceDemo(username,password)


        //clicking the add to cart button
        cy.get('#add-to-cart-sauce-labs-backpack').contains('Add to cart').click()


        // assert the cart button
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_price').should('contain.text', '$')


        // Checkout the product
        cy.get('[data-test="checkout"]').click()
        cy.get('.title').should('contain.text', 'Checkout: Your Information')
    });
})


    it('Checkout the product', () => {
        cy.fixture("example").then(user =>{
            const username = user.standard_user.username
            const password = user.standard_user.password
   
            // login using custom commands
            cy.loginSauceDemo(username,password)
   
            //clicking the add to cart button
            cy.get('#add-to-cart-sauce-labs-backpack').contains('Add to cart').click()
   
            // assert the cart button
            cy.get('.shopping_cart_link').click()
            cy.get('.inventory_item_price').should('contain.text', '$')
   
            // Checkout the product
            cy.get('[data-test="checkout"]').click()
           
            // Type checkout information
            cy.get('#first-name').clear()
            cy.get('#first-name').type('Agus Deo')


            cy.get('#last-name').clear()
            cy.get('#last-name').type('Saputra')


            cy.get('#postal-code').clear()
            cy.get('#postal-code').type('29432')


            cy.get('[data-test="continue"]').click()
           
            // Assert the checkout information
            cy.get('.title').should('contain.text', 'Checkout')


            cy.get('[data-test="finish"]').click()
            cy.get('h2').should('have.text', 'Thank you for your order!')
        });
    });
});



//login(file command.js)
cy.login(username, password)
           
cy.contains('username').click()
cy.get('#logout_link').click()
cy.get('strong').should('contain.text', 'Home')
//cy.get('h4').should('be.visible'