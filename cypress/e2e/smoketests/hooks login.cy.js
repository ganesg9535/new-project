// // type definitions for Cypress object "cy"
// /// <reference types="cypress" />

const { beforeEach } = require("mocha")

// describe('Cypress Test Hooks', function() {
    
//   it('Cypress Test Case 1', function() {
//     // Test Steps/Commands for Test Case 1
//     cy.log("I am in Test Case 1 ")
//     })

//   specify('Cypress Test Case 2', function() {
//     // Test Steps/Commands for Test Case 2
//     cy.log("I am in Test Case 2")
//     })

//   it('Cypress Test Case - 3', function () { 
//     // Test Steps for Test Case - 3 
//     cy.log("I am only in Test Case 3") })  
  
//   it.skip('Cypress Test Case - 4', function () { 
//       // Test Steps for Test Case - 3 
//       cy.log("I am in skip Test Case 4") })    
      

// })

//--------------------------------



describe('verify login functionality', () => {

  before("launch app",() => {

    cy.log("this section will run befor all")

  })

  after("launch app",() => {

    cy.log("this section will run aftere all")

  })

  beforeEach("launch app",()=>{

    cy.visit("/web/index.php/auth/login")

  })


afterEach("launch app",()=>{
  cy.log("test running compleeted")
})


  it.skip('verify login with valid credentials', () => {
    
     
      cy.get('input[name="username"]').type("admin")
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
      cy.contains('Time at Work').should('be.visible') 
       //or
      cy.contains('Dashboard') .should ('be.visible')
        //or
       cy.url().should("include","web/index.php/dashboard/index")
       
      
      
      
      })

      it('verify login with valid username and invalid password ', () => {


          cy.get('input[name="username"]').type("Admin")
          cy.get('input[name="password"]').type('ganutrfytdt')
  
          cy.get('button[type="submit"]').click()
     
          cy.contains('Invalid credentials').should('be.visible')
  
        
      })

      it('verify login with invalid username and valid password ', () => {

         
          cy.get('input[name="username"]').type("Admin")
          cy.get('input[name="password"]').type('admin123')
  
          cy.get('button[type="submit"]').click()
     
          
  
        
      })

   it('verify login with invalid username and invalid password ', () => {

      cy.get('input[name="username"]').type("Adminhiuhuh")
      cy.get('input[name="password"]').type('ganutrfytdt')

      cy.get('button[type="submit"]').click()
 
      cy.contains('Invalid credentials').should('be.visible')

    
  })

  
})