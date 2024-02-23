describe('Automation - File Upload Example', function () {

    it.only('Cypress Test Case - Understanding upload file- Attachfile', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').attachFile('upload/sample.txt');
      
      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    
    it('Cypress Test Case - Understanding upload file - Select file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').selectFile('C:/Users/Admin/Documents/cy.com/cypress/fixtures/upload/sample.txt');
    

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
      cy.wait(10000)
    
      cy.contains("The file's contents are:").should("be.visible")
    })
   
    //Import - Uploading file 

    it.only('Cypress Test Case - Understanding download file ', function () {
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf", "cypress/downloads", "istqbsyllabus"+r+".pdf")
      cy.readFile("cypress/downloads/istqbsyllabus"+r+".pdf").should('exist')
    })

    it('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fvalentines-day-cards-12-1612210510.jpg%3Fcrop%3D1.00xw%3A0.753xh%3B0%2C0.133xh%26resize%3D640%3A*&tbnid=7DBQk2SKedWg_M&vet=12ahUKEwiGtpSlnrWEAxVPp2MGHSmHCgkQMygDegQIARBg..i&imgrefurl=https%3A%2F%2Fwww.housebeautiful.com%2Fentertaining%2Fholidays-celebrations%2Fa35368823%2Fdiy-valentines-cards%2F&docid=i9o3JdFqPT1RqM&w=640&h=657&q=valentine%27s%20day%20cards&hl=en&ved=2ahUKEwiGtpSlnrWEAxVPp2MGHSmHCgkQMygDegQIARBg","cypress/downloads", "card.jpg")
      cy.readFile('cypress/downloads/card.jpg').should('exist')
    })

    it('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://www.usatoday.com/gcdn/-mm-/6cb0566daad6b8973e2c456e7a61df50f54939b5/c=0-117-1408-1994/local/-/media/2017/01/04/USATODAY/USATODAY/636191149244091355-GettyImages-537365893.jpg?width=660&height=880&fit=crop&format=pjpg&auto=webp","cypress/downloads", "tower.jpg")
      cy.readFile('cypress/downloads/tower.jpg').should('exist')
    })

  })