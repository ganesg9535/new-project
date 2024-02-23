// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')


import dashboard from '../pages/dashboardpage.po'
import addemployee from '../pages/addemployeepage.po'


Cypress.Commands.add('addemployee', (Firstname , Lastname) => { 
        cy.contains(dashboard.dashboardmenu()).should('be.visible')
        cy.contains(dashboard.pimmenu()).click()

        cy.contains(addemployee.addemployeesubmenu()).click()

        cy.get(addemployee.firstnameInput()).type(Firstname)
        cy.get(addemployee.lastbnameInput()).type(Lastname)

       cy.get(addemployee.savebutton()).click()


 })

