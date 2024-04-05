describe("test suite", function(){
    it('case', function(){
        cy.visit('https://commondatastorage.googleapis.com/infinityrt_extranet_us/hmxmedia/test/Dell/latitude-7455/v2/index.html')
            cy.get('#exploreButtton').click()

        cy.get('#accordion_productView > .text').click()
        cy.get('#menu_id_camera').click()
        cy.get('h2').should('include.text', 'Camera & Display')
        
        
    })
})