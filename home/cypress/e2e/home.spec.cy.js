describe("validating home page", () => {
    it("should add an item to the cart", () => {
        cy.visit("http://localhost:3000")
        cy.get('#showlogin').click()
        cy.get('#loginbtn').click()
        cy.get('#addtocart_101').click()
        cy.get('#showcart').click()
        cy.get('#grand-total').should('have.text', '$1,260.00')
    });
});