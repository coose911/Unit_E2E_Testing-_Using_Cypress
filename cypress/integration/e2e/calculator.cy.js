describe("Calculator", () => {



  beforeEach(() => {
    cy.visit("http://localhost:3000");



  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Do the number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '22')
  })

  it('Do the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('Can multiple operations be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('Is the output as expected for a range of numbers (negative)', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-22')
  })

  it('Is the output as expected for a range of numbers (positive)', () => {
    cy.get('#number2').click();
    cy.get('#number9').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '74')
  })

  it('Is the output as expected for a range of numbers (decimals)', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '14.5')
  })

  it('Is the output as expected for a range of numbers (very large numbers)', () => {
    cy.get('#number2').click();
    cy.get('#number6').click();
    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '947232')
  })

  it("What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement)", () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })
  
  

})