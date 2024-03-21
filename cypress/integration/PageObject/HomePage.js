class HomePage{
    getName(){
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }
    getEntrepreneurButton(){
        return cy.get('#inlineRadio3')
    }
    getShopButton(){
        return cy.contains('Shop')  
    }
}
export default HomePage;