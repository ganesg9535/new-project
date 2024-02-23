describe('verify login functionality', () => {
    it.only('verify login with valid credentials', () => {
          cy.visit("/web/index.php/auth/login")
        //cy.visit("/web/index.php/auth/login")
        cy.get('input[name="username"]').type("admin")
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Time at Work').should('be.visible') 
         //or
        cy.contains('Dashboard') .should ('be.visible')
          //or
         cy.url().should("include","web/index.php/dashboard/index")
         
        
        
        
        })

    it('verify login with valid username and invalid password ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type('ganutrfytdt')

        cy.get('button[type="submit"]').click()
   
        cy.contains('Invalid credentials').should('be.visible')

      
    })

    it('verify login with invalid username and valid password ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admicfcfcfcf")
        cy.get('input[name="password"]').type('admin123')

        cy.get('button[type="submit"]').click()
   
        cy.contains('Invalid credentials').should('be.visible')
        cy.viewport('iphone-4')

      
    })

    it('verify login with invalid username and invalid password ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Adminhiuhuh")
        cy.get('input[name="password"]').type('ganutrfytdt')

        cy.get('button[type="submit"]').click()
   
        cy.contains('Invalid credentials').should('be.visible')

      
    })

    
  })