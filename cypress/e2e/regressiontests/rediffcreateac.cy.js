//import { data } from "cypress/types/jquery"
import data from '../fixtures/rediffex/regidata.json'
import createdata from "../page/rediff.po"

describe('verify register', () => {
  it('creating rediffmail account', () => {

cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
cy.get(createdata.fullnameInput()).type(data.fullname)
cy.get(createdata.reddifmailid()).type(data.radiffmail)
cy.get(createdata.password()).type(data.password)
cy.get(createdata.retypepassword()).type(data.retypepassword)
cy.get(createdata.alternateemail()).type(data.alternateemail)
cy.get(createdata.mobileno()).type(data.mobileno)
cy.get(createdata.day()).select(data.date)
cy.get(createdata.month()).select(data.month) 
cy.get(createdata.year()).select(data.year) 
cy.get(createdata.gender()).click()
cy.get(createdata.country()).select(data.country)
cy.get(createdata.city()).select(data.city)
})
})