import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Error from './../Error';

describe('Error component', () => {
  it('renders with default error message', () => {
    render(<Error />);
    // Check if the component renders the error message
    expect(screen.getByText('Unable to load, please try again')).toBeTruthy();
  });

  it('renders with custom error message', () => {
    const customErrorMessage = 'Custom error message';
    const {getByText} = render(<Error errorMessage={customErrorMessage} />);

    // Check if the component renders the custom error message
    expect(getByText(customErrorMessage)).toBeTruthy();
  });
});