describe('check box', () => {
    it('check', () => {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
      cy.get('.nomargin').check()

      cy.wait(2000)
      cy.get('.nomargin').uncheck()
    })})


    it('check 2',()=>{

        cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')
        cy.get('input[type="checkbox"]').check()

        cy.wait(3000)
        cy.get('input[type="checkbox"]').uncheck()
    })


    
    it.only('check 3',()=>{

        cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')
        cy.get('input[type="checkbox"]').check(["HTML","PHP",]).should('be.checked')

        cy.wait(3000)
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
    })
    
    

