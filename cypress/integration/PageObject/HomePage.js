class Homepage{
    getName(){
        return cy.get('input[name="name"]:nth-child(2)')
        
    }
    getEmail(){
        return cy.get('input[name="email"]')
    }
    getPassword(){
        return cy.get('#exampleInputPassword1')
    }
    getGender(){
        return cy.get('#exampleFormControlSelect1');
    }
    getTwoWay(){
        return cy.get('input[name="name"]:nth-child(1)')
    }
    getEntrepreneurElement(){
        return cy.get('#inlineRadio3')
    }
    getShopButton(){
        return cy.contains('Shop')
    }
}
export default Homepage