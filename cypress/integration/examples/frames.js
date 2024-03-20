import 'cypress-iframe'
describe('test suite', function(){
    it('test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')      // Give the frame css
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
     })
})