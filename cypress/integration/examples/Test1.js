describe('Test Suite 1', function(){
    it('Test Case 1', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('cu')
        cy.wait(2000)
        
    })
})