import { beforeEach } from "mocha"

describe('Automation working with alerts', function() {
    
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
    })
//simple
    it('cypress test case-simple alert',function(){
        cy.contains('Click for JS Alert').click();

        cy.on('window:alert',(alert)=>{
            expect(alert).to.equal('I am a JS Alert')
           return true 
        }) })

//confirm
        it('cypress test case-test Confirm alert-OK',function(){
            cy.contains('Click for JS Confirm').click();
    
            cy.on('window:confirm',()=>{
               return true 
            }) })

            it('cypress test case-test Confirm alert-cancel',function(){
                cy.contains('Click for JS Confirm').click();
        
                cy.on('window:confirm',()=>{
                   return false 
                }) })

//prompt


                it('cypress test case-test Prompt alert-OK',function(){
                   cy.window().then((win)=>{
                    cy.stub(win,'prompt').returns("ganu");
                    cy.contains('Click for JS Prompt').click();
                   })
                    
                    })


                    it.only('cypress test case-test Prompt alert-Cancel',function(){
                        cy.window().then(($win)=>{
                         cy.stub($win,'prompt').callsFake(()=>null)
                         cy.contains('Click for JS Prompt').click();
                        })
                         
                         })  })

