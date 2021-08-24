import React from 'react';
import Header from '../Header';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Header />);
    getByTestId = component.getByTestId;
});

test("header is rendered with title", () => {
    const headerOne = getByTestId("header-one");

    expect(headerOne.textContent).toBe("Lotto 6/49");
});

test("header is rendered with subtitle", () => {
    const headerThree = getByTestId("header-three");

    expect(headerThree.textContent).toBe("Generating lucky numbers");
});

