describe('cryptocases',function(){
    it('firstcase',function(){
        cy.visit('https://crytoverselatest.netlify.app/')
        //cy.get(':nth-child(2) > .ant-statistic-content > .ant-statistic-content-value > .ant-statistic-content-value-int')
        cy.get(':nth-child(2) > .ant-statistic-content > .ant-statistic-content-value > .ant-statistic-content-value-int').then(function(text){
            const value = text.text()
            expect(value).to.equal('171')
        })
    })
})