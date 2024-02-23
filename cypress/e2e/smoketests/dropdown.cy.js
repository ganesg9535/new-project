//import cypress = require("cypress")

describe('drop down', () => {
    it('dropdown', () => {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

      //text-
      cy.get('select[name^="DOB_Month"]').select('APR')

      //value
      cy.get('select[name^="DOB_Month"]').select("10")
      //index
      cy.get('select[name^="DOB_Month"]').select(2)
      
    })
    
    
it.only("dropdown 2",() =>{

Cypress.on("uncaught:exception",()=>{
        return false;
    });

cy.visit('https://chercher.tech/practice/practice-dropdowns-selenium-webdriver')
cy.get('#first').select(1)

})



})
