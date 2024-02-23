import data from '../../fixtures/trellodata.json/trldata.json'
import logindata from '../../page/trellologin.po'

describe('automation work with trello', function () {
    it('Cypress Test Case - Understanding Links and how to work with Links', function (){
      Cypress.on("uncaught:exception",()=>{
        return false;
    });
      cy.visit('https://trello.com/en/login')
      cy.contains('Log in').click()
      //cy.get(logindata.emaile()).type(data.email) 
      //cy.get(logindata.continue()).click()
      cy.visit("https://id.atlassian.com/",()=>{
        
     cy.get(logindata.username()).type(data.email)
      cy.get(logindata.password()).type(data.password)
      cy.get(logindata.loginbutton()).click()
      cy.url().should("eq","https://id.atlassian.com/signup/welcome/sent?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&token=eyJraWQiOiJtaWNyb3Mvc2lnbi1pbi1zZXJ2aWNlLzhjZDRqOTh2N2ZjcDM3cnYiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsaW5rLXNpZ25hdHVyZS12YWxpZGF0b3IiLCJzdWIiOiJnYW51c2g5NTM1QGdtYWlsLmNvbSIsIm5iZiI6MTcwNzgzODYyOSwic2NvcGUiOiJ3ZWxjb21lRW1haWxSZXNlbnQiLCJpc3MiOiJtaWNyb3Mvc2lnbi1pbi1zZXJ2aWNlIiwicmVkaXJlY3RUeXBlIjoicmVzdW1lX3NpZ251cCIsImV4cCI6MTcwNzgzOTUyOSwicmVjYXB0Y2hhU2NvcmUiOiJudWxsIiwidXNlcklkIjoiNzEyMDIwOjI0Y2Y4OTcyLTg1Y2QtNGM5Ni04YWZkLWU5ODg0YjczMGZjNiIsImlhdCI6MTcwNzgzODYyOSwianRpIjoiZGVhMzE2NWYtYmQyMC00OTQ3LTkwZmUtNDZjY2YzM2VmZTRhIn0.I5Oo3eANt80NPOcmic0ipoF0Ef2MEGjr9GMlY8Y44zvj0fP-sVHiWIW90p5xBO1z3YniXKbksLDYhrNSNui1m5_OQfsgc-sZkR7acavA_Ew1CYM3hPO_inowelKfB7y2b9rCxS4bNHkn_s3AjJDuNvWKOFvGSHM3euJ9oDrKZaVFTz3vRA4ZUwLy6kAZvgYnflK6_RY0dcBWvrBNyaylQ-hwmZ9zEfUwws4trksOXO30ls178SJdt4yf7UCzaLH5oL5P2w-cbSLz-nkElZCkUkCHiv-2TAp8SnUm0C4Bw5JOT7RiJBfxed1bD00Lc2ZARZwOiuPxXgPRKJfk6fK9Vg")
      cy.get('#WhiteboxContainer').should('contain.text','Trello');
    
      });

      
    })
  })