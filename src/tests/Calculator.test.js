import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';


describe('Calculator', () => {
  let container;


  beforeEach(() => {
    container = render(<Calculator/>)
    const button0 = container.getByTestId('number0');
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const button5 = container.getByTestId('number5');
    const button6 = container.getByTestId('number6');
    const button7 = container.getByTestId('number7');
    const button8 = container.getByTestId('number8');
    const button9 = container.getByTestId('number9');
    fireEvent.click(add)
    fireEvent.click(subtract)
    fireEvent.click(multiply)
    fireEvent.click(equals)

  })


  it('should change running total on number enter', () => {
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })


  it('should be able to add 1 to 4', () => {
    fireEvent.click(button4)
    fireEvent.click(add)
    fireEvent.click(button1)
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should be able to subtract 4 from 7', () => {
    fireEvent.click(button7)
    fireEvent.click(subtract)
    fireEvent.click(button4)
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('multiply 3 by 5 and get 15', () => {
  fireEvent.click(button3)
  fireEvent.click(multiply)
  fireEvent.click(button5)
  fireEvent.click(equals)
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('15');
})

it('divide 21 by 7 and get 3', () => {
  fireEvent.click(button2)
  fireEvent.click(button1)
  fireEvent.click(divide)
  fireEvent.click(button7)
  fireEvent.click(equals)
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('3');
})

it('concatenate multiple number button clicks', () => {
  fireEvent.click(button2)  
  fireEvent.click(button1)  
  fireEvent.click(button4)  
  fireEvent.click(button5)  
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('2145');
})

it('chain multiple operations together', () => {
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

