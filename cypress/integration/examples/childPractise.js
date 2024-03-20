// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Test suite', function(){
    it('Child window Test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.origin('https://www.qaclickacademy.com/', ()=>{
            cy.get()
        })
    })
})