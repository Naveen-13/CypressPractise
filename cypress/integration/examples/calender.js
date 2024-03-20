describe('Test suite', ()=>{
    it('Test Case', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('button[class*="view__years"]').each(($e1, index, $list) => {
            const year = $e1.text()
            if(year.includes('2027')){
                cy.get('button[class*="view__years"]').eq(index).click()
            }
        })
        cy.get('abbr[aria-label*="September"]').click()
        cy.get("abbr[aria-label*='13']").click()
        cy.get('span[class*="react-calendar"]').then(function(date){
            const dateText = date.text()
            expect(dateText).to.equal('September 2027')
        })
        cy.contains()

    })
})

const User = {
    name:'new',
    getName:function(){
        return this.name;
    },
    getNameArrow:()=>{
        return this.name;
    }
}