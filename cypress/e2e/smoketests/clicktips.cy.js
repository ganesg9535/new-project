describe('templet spec', () => {
    it('passes', () => {
      cy.visit('https://www.cypress.io/')
      cy.contians('Installing Cypress').click({force:true})
    })
  }) 


  describe('templet spec', () => {
    it.only('passes', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.xpath("//button[text()='ADD TO CART']").click({multiple:true})
    })
  }) 