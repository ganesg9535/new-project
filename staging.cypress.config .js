const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  

  e2e: {
    
     //"baseUrl":"",
     "video":true,
     "PageLoadTimeout":120000,
     "DefaultcommandTimeout":120000,
     "ViewPortWidth":1920,
     "ViewPortHight":1080,
     "env":{

      "username": "Admin",
      "password": "admin123",
      "endpoint": "https://staging.opensource-demo.orangehrmlive.com/web/index.php/auth/login"
     },
  
     


  },
    "excludeSpecpattern":"cypress/e2e/smoketests/flipcart.cy.js",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
  },
  

});
