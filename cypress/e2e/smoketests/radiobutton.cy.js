describe('radio button', () => {
    it('radio', () => {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
      cy.get('input[value="f"]').check().should('be.checked')
      cy.get('input[value="m"]').check().should('be.checked')
    })})