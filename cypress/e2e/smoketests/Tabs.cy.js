
describe('automation working with Tabs in webpage', function () {
    it('cypress Test case-understanding tabs in webpage',function(){

        Cypress.on("uncaught:exception",(err,runable)=>{
            return false;
        });

        cy.visit('https://www.cypress.io/');


        cy.contains('API').invoke("removeAttr","target").click({force: true})
        cy.wait(2000)
        cy.reload()
        cy.url().should('include','https://docs.cypress.io/api/commands/and')
    })


    })
  