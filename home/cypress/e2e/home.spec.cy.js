describe("validating home page", () => {

    before(function () {
        cy.fixture("test").then((data) => {
            this.data = data
        })
    })

    it("should add an item to the cart", function () {
        cy.visit(this.data.url)
        cy.get('#show-login').click()
        cy.get('#username').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.get('#login-btn').click()
        cy.get('#add-to-cart-101').click()
        cy.get('#show-cart').click()
        cy.get('#grand-total').should('have.text', this.data.grandTotal)
        cy.get('#clear-cart').click()
    });
});