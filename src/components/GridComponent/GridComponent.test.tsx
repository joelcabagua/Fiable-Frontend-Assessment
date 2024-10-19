import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react'; // Import act from react
import { GridComponent } from './index';

describe('GridComponent', () => {
  it('shows an icon if the input value is valid', async () => {
    render(<GridComponent inputValue="1,1 NORTH" />);

    // Check if the Pointer component or icon is rendered
    const pointerIcon = await screen.findByTestId('pointer-icon');
    expect(pointerIcon).toBeInTheDocument();
  });
});

const directions = [
  { input: '1,1 NORTH', expectedRotation: 'rotate(0)' },
  { input: '1,1 EAST', expectedRotation: 'rotate(90deg)' },
  { input: '1,1 SOUTH', expectedRotation: 'rotate(180deg)' },
  { input: '1,1 WEST', expectedRotation: 'rotate(-90deg)' }
];

describe('GridComponent Pointer Direction', () => {
  directions.forEach(({ input, expectedRotation }) => {
    it(`shows an icon with correct direction for input "${input}"`, async () => {
      render(<GridComponent inputValue={input} />);

      // Check if the Pointer component or icon is rendered
      const pointerIcon = await screen.findByTestId('pointer-icon');
      expect(pointerIcon).toBeInTheDocument();

      // Check if the transform style has the correct rotate value
      expect(pointerIcon).toHaveStyle(`transform: ${expectedRotation}`);
    });
  });
});

const errors = [
  { input: '1,1 NORT', expectedError: 'Invalid direction' },
  { input: 'a,1 EAST', expectedError: 'Invalid coordinates.' },
  { input: '5,1 SOUTH', expectedError: 'Coordinates out of range.' }
];

describe('GridComponent Error Handling', () => {
  errors.forEach(({ input, expectedError }) => {
    it(`shows an error message for invalid input: "${input}"`, async () => {
      render(<GridComponent inputValue={input} />);

      // Check if the Pointer component or icon is rendered
      const errorAlert = await screen.findByText(expectedError);
      expect(errorAlert).toBeInTheDocument();
    });
  });
});
