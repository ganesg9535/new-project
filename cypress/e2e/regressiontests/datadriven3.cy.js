

import addempdata3 from '../../fixtures/datadriven3/addempdata3.json'
import logindata from '../../fixtures/addemployeelogin details.json';
import login from '../../page/loginpage1.po';
import addemployee from '../../pages/addemployeepage.po';
import dashboard from  '../../pages/dashboardpage.po'


describe('automation-datadriven testing',()=>{
    beforeEach(()=>{
        cy.session('login session',()=>{
            cy.visit('/web/index.php/auth/login')
            
            cy.get(login.username()).type(logindata.username)
            cy.get(login.password()).type(logindata.password)
            cy.get(login.submittbutton()).click()
        })
    })

    addempdata3.forEach((data)=>{
        it("verify add employee mandatory detials",()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
        cy.addemployee(data.Firstname, data.Lastname)
        cy.contains(addemployee.successmessage()).should("be.visible")
        })

    })
})



