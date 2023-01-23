import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';


describe('Calculator', () => {
  let container;


  beforeEach(() => {
    container = render(<Calculator/>)
  })


  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })


  it('should be able to add 1 to 4', () => {
    const button4 = container.getByTestId('number4');
    const add = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button4)
    fireEvent.click(add)
    fireEvent.click(button1)
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should be able to subtract 4 from 7', () => {
    const button7 = container.getByTestId('number7');
    const subtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(button7)
    fireEvent.click(subtract)
    fireEvent.click(button4)
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('multiply 3 by 5 and get 15', () => {
  const button3 = container.getByTestId('number3');
  const multiply = container.getByTestId('operator-multiply');
  const button5 = container.getByTestId('number5');
  const equals = container.getByTestId('operator-equals')
  fireEvent.click(button3)
  fireEvent.click(multiply)
  fireEvent.click(button5)
  fireEvent.click(equals)
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('15');
})

it('divide 21 by 7 and get 3', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const divide = container.getByTestId('operator-divide');
  const button7 = container.getByTestId('number7');
  const equals = container.getByTestId('operator-equals')
  fireEvent.click(button2)
  fireEvent.click(button1)
  fireEvent.click(divide)
  fireEvent.click(button7)
  fireEvent.click(equals)
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('3');
})

it('concatenate multiple number button clicks', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const button4 = container.getByTestId('number4');
  const button5 = container.getByTestId('number5');
  fireEvent.click(button2)  
  fireEvent.click(button1)  
  fireEvent.click(button4)  
  fireEvent.click(button5)  
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('2145');
})

it('chain multiple operations together', () => {
  const button9 = container.getByTestId('number9');
  const add = container.getByTestId('operator-add');
  const button2 = container.getByTestId('number2');
  const subtract = container.getByTestId('operator-subtract');
  const button1 = container.getByTestId('number1');
  const divide = container.getByTestId('operator-divide');
  const button5 = container.getByTestId('number5');
  const equals = container.getByTestId('operator-equals');
  fireEvent.click(button9)  
  fireEvent.click(add)  
  fireEvent.click(button2)  
  fireEvent.click(subtract)  
  fireEvent.click(button1)  
  fireEvent.click(divide)  
  fireEvent.click(button5) 
  fireEvent.click(equals) 
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('2');
})

it('clear the running total without affecting the calculation', () => {
  const button9 = container.getByTestId('number9');
  const add = container.getByTestId('operator-add');
  const button6 = container.getByTestId('number6');
  const subtract = container.getByTestId('operator-subtract');
  const button1 = container.getByTestId('number1');
  const divide = container.getByTestId('operator-divide');
  const button5 = container.getByTestId('number5');
  const clear = container.getByTestId('clear')
  const button2 = container.getByTestId('number2');
  const equals = container.getByTestId('operator-equals');
  fireEvent.click(button9)  
  fireEvent.click(add)  
  fireEvent.click(button6)  
  fireEvent.click(subtract)  
  fireEvent.click(button1)  
  fireEvent.click(divide)  
  fireEvent.click(button5) 
  fireEvent.click(clear)
  fireEvent.click(button2)
  fireEvent.click(equals)
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('7');
})

})

