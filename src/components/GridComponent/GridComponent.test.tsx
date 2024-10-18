import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react'; // Import act from react
import { GridComponent } from './index';

describe('GridComponent', () => {
  it('renders without problem', () => {
    render(<GridComponent />);
    expect(screen.getByLabelText(/x,y direction/i)).toBeInTheDocument();
  });

  it('updates input value correctly', () => {
    render(<GridComponent />);
    const input = screen.getByLabelText(/x,y direction/i);

    act(() => {
      fireEvent.change(input, { target: { value: '1,1 NORTH' } });
    });

    expect(input).toHaveValue('1,1 NORTH');
  });

  it('shows an icon if the input value is valid', async () => {
    render(<GridComponent />);
    const input = screen.getByLabelText(/x,y direction/i);

    act(() => {
      fireEvent.change(input, { target: { value: '1,1 NORTH' } });
    });

    expect(input).toHaveValue('1,1 NORTH');

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
      render(<GridComponent />);
      const inputField = screen.getByLabelText(/x,y direction/i);

      act(() => {
        fireEvent.change(inputField, { target: { value: input } });
      });

      // Check if the Pointer component or icon is rendered
      const pointerIcon = await screen.findByTestId('pointer-icon');
      expect(pointerIcon).toBeInTheDocument();

      // Check if the transform style has the correct rotate value
      expect(pointerIcon).toHaveStyle(`transform: ${expectedRotation}`);
    });
  });
});
