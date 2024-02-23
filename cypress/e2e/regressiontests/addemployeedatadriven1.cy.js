
import logindata from '../fixtures/addemployeelogin details.json'
import login from '../page/loginpage1.po'
import addemployee from '../page/addemp.po'

const fixtureNames=[
    {
        "name":"datadriven1/abhishek",
        "context":"1"

    },
    {
        "name":"datadriven1/arun",
        "context":"2"
    },
    {
        "name":"datadriven1/hanumanth",
        "context":"3"
    },
    {
        "name":"datadriven1/nagaraj",
        "context":"4"
    },
    {
        "name":"datadriven1/ramesh",
        "context":"5"
    },
  
]

describe("test sute",function (){
    fixtureNames.forEach((afixture)=>{
        describe(afixture.context,()=>{
            before(function (){
                cy.fixture(afixture.name).then((data)=>{
                    this.data=data;
                })
            })

            it("test cases1",function (){
                
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                cy.get(login.username()).type(logindata.userName)
                cy.get(login.password()).type(logindata.password)
                cy.get(login.submittbutton()).click()
                cy.contains(login.dashboard()).should('be.visible')
                cy.contains(login.pimmodule()).click()
                cy.contains(addemployee.Addemployee()).click()
                cy.get(addemployee.employeeFirstname()).type(this.data.Firstname)
                cy.get(addemployee.employeeLastname()).type(this.data.Lastname)
                cy.get(addemployee.submitbutton()).click()
                cy.contains(addemployee.successfullmessage).should('be.visible')
        
            })
        
        })
    })
    
    
})