describe('Test suite', function(){
    it('checking the contains finc', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.contains('Home').click()
        cy.url().should('include', 'rahulshetty')
    })
})