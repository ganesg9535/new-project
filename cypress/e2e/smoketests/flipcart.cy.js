describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.flipkart.com/')
    cy.get("#container > div > div.q8WwEU > div > div > div > div > div.css-1dbjc4n.r-13awgt0 > div > div > div > div._2nl6Ch > div._2NhoPJ > header > div._3ZqtNW > div._3NorZ0._3jeYYh > form > div > div > input").type("shoes for men{enter}")
  })
}) 