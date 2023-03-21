import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';


describe('Calculator', () => {
  let container;
  let button0;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let buttonDecimal;
  let add;
  let subtract;
  let multiply;
  let divide;
  let equals;
  let clear;
  let runningTotal;


  beforeEach(() => {
    container = render(<Calculator/>)
    button0 = container.getByTestId('number0');
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    buttonDecimal = container.getByTestId('decimal');
    add = container.getByTestId('operator-add');
    subtract = container.getByTestId('operator-subtract');
    multiply = container.getByTestId('operator-multiply');
    divide = container.getByTestId('operator-divide');
    equals = container.getByTestId('operator-equals');
    clear = container.getByTestId('clear');
    runningTotal = container.getByTestId('running-total');


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

it('should clear the running total without affecting the calculation', () => {
  fireEvent.click(button2)
  fireEvent.click(button1)
  fireEvent.click(divide)
  fireEvent.click(button3)
  fireEvent.click(subtract)
  fireEvent.click(button2)
  fireEvent.click(clear)
  fireEvent.click(button7)
  fireEvent.click(equals)
  expect(runningTotal.textContent).toEqual('0')
})


})

