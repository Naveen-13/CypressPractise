import HomePage from "../PageObject/HomePage"
describe('Frame work Design', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
    it('adding the data', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        const homepage = new HomePage()
        homepage.getName().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getName().should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        homepage.getEntrepreneurButton().should('be.disabled')
        homepage.getShopButton().click()
        this.data.productName.forEach((element) => {
            cy.selectProduct(element)
        });
        cy.get('.btn-primary').click()
        cy.get('.btn-success').click()
        Cypress.config('defaultCommandTimeout', 8000)
        cy.get('#country').type('Ind')
        
        cy.get('div[class="suggestions"] ul li a').each(($e1, index, $list) => {
            const country = $e1.text()
            if(country.includes('India')){
                cy.get('div[class="suggestions"] ul li a').eq(index).click()
            }

        })
        cy.get('#checkbox2').click({force: true})
        cy.get('.btn-success').click()
        cy.get('.alert-success').then(function(element){
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })
        
    })
})