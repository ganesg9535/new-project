const availablefixtures =[

{
  "name":"datadriven/register",
  "context": "1"
},

{
  "name":"datadriven/nagu",
  "context": "2"
},

{
  "name":"datadriven/ramu",
  "context": "3"
},
]

describe("verify add employee functionality",function () {

  availablefixtures.forEach((afixture ) =>{
    describe(afixture.context,() => {
      before(function (){
        cy.fixture(afixture.name).then(function(data)
        {this.data=data;

        })
      })

      it('cypress test case add employee',function(){
        
    cy.visit("https://shop.demoqa.com/my-account/")
    cy.get('#reg_username').type(this.data.username)
    cy.get('#reg_email').type(this.data.emailaddress)
    cy.get('#reg_password').type(this.data.weakpassword)
    //cy.get('.woocommerce-Button').should('be.disabled')
    //or
   // cy.get('.woocommerce-Button').should("have.attr","disabled","disabled")
     
   // cy.get('#reg_password').clear()
    //cy.get('#reg_password').type(this.data.strongpassword)
    
    cy.get('#reg_password').clear().type(this.data.strongpassword)
     
    cy.get('.woocommerce-Button').click()

   // cy.get('#username').should("have.attr","value",this.data.username)
   //or
   cy.get('#username').should("have.value",this.data.username)

      })
     })
    })})











  
  
