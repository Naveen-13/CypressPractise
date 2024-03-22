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
}
export default Homepage