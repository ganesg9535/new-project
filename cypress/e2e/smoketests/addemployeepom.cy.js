import login from '../pages/loginpage.po'
import dashboard from '../pages/dashboard. po'
import addemployee from '../pages/addemployee.po'
describe('verify add employee functionality', () => {
 
   
  var creds ={
    username:"Admin",
    password:"admin123"
  }
  var menuitems={

    menu1: " Admin",
    
    menu2: "PIM",
    
    menu3: "Leave",
    
    menu4: "Time",
    
    menu5: "Recruitment",
    
    menu6: "My Info",
    
    menu7: "Performance",
    
    menu8: "Dashboard",
    
    menu9: "Directory",
    
    menu10: "Buzz"
    }

  it('verify add employee with mandatory details', () => {
    cy.visit(Cypress.env('endpoint'))
  // login.loginwithcreds(creds.username, creds.password)
  // //or
  cy.get(login.username()).type (creds ["username"])
  cy.get(login.password()).type (creds ['password'])
  cy.get(login.submitbutton).click()
  //or
  cy.contains(dashboard.dashboardmenu()).should('be.visible')

  for (let item in menuitems ){

    cy.contains(menuitems[item]).should('be.visible')

  }

  cy.contains(dashboard.pimmenu()).click()

  cy.contains(addemployee.addemployeesubmenu()).click()

  cy.get(addemployee.firstnameInput()).type("ganesh")
  cy.get(addemployee.lastnameInput()).type("h")
  cy.get(addemployee.savebutton()).click()
  cy.contains(addemployee.successmessage()).should('be.visible')
    
    
})
})