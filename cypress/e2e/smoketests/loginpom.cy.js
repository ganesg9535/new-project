
import { beforeEach } from "mocha"
import login from '../pages/loginpage.po'
import dashboard from '../pages/dashboard. po'
describe('verify login functionality', () => {


    beforeEach("launch app",()=>{

       
    cy.visit("/web/index.php/auth/login") 
     cy.get (login.logo()).should("be.visible")
    
      })
    

    it('verify login with valid credentials', () => {
      
     
        cy.get(login.username()).type("admin")
        cy.get(login.password()).type('admin123')
        cy.get(login.submitbutton).click()
        cy.contains(dashboard.timeandworkcard()).should('be.visible') 
         //or
        cy.contains(dashboard.dashboardmenu()) .should ('be.visible')
          //or
         cy.url().should("include","web/index.php/dashboard/index")
         
        
        
        
        })

    it('verify login with valid username and invalid password ', () => {

        
        cy.get(login.username()).type("Admin")
        cy.get(login.password()).type('ganutrfytdt')

        cy.get(login.submitbutton).click()
   
        cy.contains(login.loginerrormessage()).should('be.visible')

      
    })

    it('verify login with invalid username and valid password ', () => {

        
        cy.get(login.username()).type("Admicfcfcfcf")
        cy.get(login.password()).type('admin123')

        cy.get(login.submitbutton).click()
   
        cy.contains(login.loginerrormessage()).should('be.visible')
        

      
    })

    it('verify login with invalid username and invalid password ', () => {

        
        cy.get(login.username()).type("Adminhiuhuh")
        cy.get(login.password()).type('ganutrfytdt')

        cy.get(login.submitbutton).click()
   
        cy.contains(login.loginerrormessage()).should('be.visible')

      
    })

    
  })