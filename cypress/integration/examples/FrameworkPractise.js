describe('Framework for Testing', function(){
    it('End to End Test Case', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type("Username01")
        cy.get('#exampleCheck1').should('not.be.checked')
        cy.get('#exampleCheck1').check().should('be.checked')
    })
})