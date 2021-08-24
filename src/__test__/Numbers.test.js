import React from 'react';
import Numbers from '../Numbers';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

let getByTestId;
let getAllByTitle;

beforeEach(() => {
    const component = render(<Numbers />);
    getByTestId = component.getByTestId;
    getAllByTitle = component.getAllByTitle;
})

test("7 numbers are generated", () => {
    const numbers = getByTestId("lucky-numbers");
    const showButton = getByTestId("show-button");
    expect(numbers.textContent).toBe("");
    // Generate numbers:
    fireEvent.click(showButton);

    const numbersArray = getAllByTitle("number");

    expect(numbersArray).toHaveLength(7);
});

test("numbers are between 1 and 50 and last between 1 and 10", () => {
    const showButton = getByTestId("show-button");
    // Generate numbers:
    fireEvent.click(showButton);

    const numbersArray = getAllByTitle("number");
    const intNumbersArray = [];
    // Parse int from strings:
    for (let i = 0; i < numbersArray.length; i++) {
        intNumbersArray.push(parseInt(numbersArray[i].textContent));
    }
    
    intNumbersArray.forEach((element) => {
        expect(element).toBeLessThan(50);
        expect(element).toBeGreaterThan(0);
    })

    expect(intNumbersArray[intNumbersArray.length - 1]).toBeLessThan(10);
});

test("there are no duplicates among the first 6 numbers", () => {
    const showButton = getByTestId("show-button");
    // Generate numbers:
    fireEvent.click(showButton);
    
    const numbersArray = getAllByTitle("number");
    const intNumbersArray = [];
    for (let i = 0; i < 6; i++) {
        intNumbersArray.push(parseInt(numbersArray[i].textContent));
    }

    // new Set(array) returns an array with only unique values:
    expect(new Set(intNumbersArray).size).toBe(intNumbersArray.length)
});

test("reset button works", () => {
    const numbers = getByTestId("lucky-numbers");
    const showButton = getByTestId("show-button");
    const resetButton = getByTestId("reset-button");

    fireEvent.click(showButton);
    
    expect(numbers.textContent).not.toBe("");

    fireEvent.click(resetButton);

    expect(numbers.textContent).toBe("");
})