/// <reference types="Cypress" />
import * as mapping from "../helper/maping.js";
import dayjs from "dayjs";

 
describe('LoadandBookTicket', () => {
  let now = dayjs();
  it('Open the portal and book the ticket', () => {
    
    cy.visit(mapping.webURL)
    cy.get('input[name='+mapping.textBoxPartida+']').type('Lagos')
    cy.get('input[name='+mapping.textBoxChegada+']').type('Porto - Campanha')
        
    //cy.get('#datepicker-first').click({force: true})
    //cy.get('#datepicker-first').clear()
    //cy.get('#datepicker-first').type(deptDate)
    
    //var returningDate=cy.getDate(0)
    let returningDate = now.add(5, "day").format("D MMMM, YYYY");
    console.log(returningDate);
    cy.get(mapping.datePickerSecond).click({force: true})
    cy.get(mapping.datePickerSecond).clear()    
    cy.get(mapping.datePickerSecond).type(returningDate)
  
    cy.get('#searchTimetableForm').submit()

    cy.get(mapping.exitButton, { timeout: 10000 }).should('be.visible').click();

  })
})