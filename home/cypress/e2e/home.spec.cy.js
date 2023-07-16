describe("validating home page", () => {
    it("should add an item to the cart", () => {
        cy.visit("http://localhost:3000")
        cy.get('#show-login').click()
        cy.get('#username').type('josdem')
        cy.get('#password').type('12345678')
        cy.get('#login-btn').click()
        cy.get('#add-to-cart-101').click()
        cy.get('#show-cart').click()
        cy.get('#grand-total').should('have.text', '$1,260.00')
        cy.get('#clear-cart').click()
    });
});