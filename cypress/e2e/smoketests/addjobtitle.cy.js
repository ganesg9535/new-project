import data from "../../fixtures/Admin/addjobtitle.json"

describe('verify add job title functionality ', () => {
  it('verify adding job title', () => {

    cy.visit(Cypress.env('endpoint'))
    cy.wait(1000)
    cy.get('input[name="username"]',).type (Cypress.env("username"))
    cy.get('input[name="password"]').type (Cypress.env("password"))
    cy.get('button[type="submit"]').click()
    //or
    cy.contains('Dashboard').should('be.visible')
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()


    cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input").type(data.jobtitle)
    cy.get('textarea[placeholder="Type description here"]').type(data.jobdescription)
    cy.get('button[type="submit"]').click()
    cy.contains('Successfully Saved').should("be.visible")


  })
})