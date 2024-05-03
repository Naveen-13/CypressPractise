import Homepage from "../PageObject/HomePage"
describe('Frame work Design', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
    it('adding the data', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        const homepage = new Homepage()
        homepage.getName().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getTwoWay.should('have.value', this.data.name)
        homepage.getName.should('have.attr', 'minlength', '2')
        //cy.pause()      //to pause the test
        homepage.getEntrepreneurElement.should('be.disabled')
        homepage.getShopButton.click()
        this.data.productName.forEach((element) => {
            cy.selectProduct(element)
        });
        cy.get('.btn-primary').click()
        var sum =0
        cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {
            const price = $e1.text()
            var res = price.split(" ")
            res = res[1].trim()
            sum =  Number(sum) + Number(res)
        })
        cy.get('h3 strong').then(function(element){
            const totalPrice = element.text()
            var total = totalPrice.split(" ")
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)
        })


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