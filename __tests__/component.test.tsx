import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message if fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Error: Failed to fetch/i));
  });

  test('renders data successfully when fetched', async () => {
    const mockData = { status: 'success', data: { name: 'Example Data' } };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Example Data/i));
  });

  test('handles user interaction with buttons and inputs', () => {
    const mockFn = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={mockFn}
        onChange={(e) => console.log(e.target.value)}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(mockFn).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
  });

  test('manages edge cases such as empty data or null values', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success', data: null });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/No Data Available/i));
  });

  test('validates form inputs and displays error messages if necessary', () => {
    const mockFn = jest.fn();
    render(
      <CoreFunctionalityComponent
        onSubmit={mockFn}
        validation={(value) => value.length > 5 ? 'Too short' : null}
      />
    );
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'short' } });
    fireEvent.click(screen.getByRole('button'));
    expect(mockFn).not.toHaveBeenCalled();
    screen.getByText(/Too short/i);
  });

  test('tests keyboard navigation and focus management', () => {
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Tab' });
    expect(document.activeElement).toBe(input);
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message if fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Error: Failed to fetch/i));
  });

  test('renders data successfully when fetched', async () => {
    const mockData = { status: 'success', data: { name: 'Example Data' } };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Example Data/i));
  });

  test('handles user interaction with buttons and inputs', () => {
    const mockFn = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={mockFn}
        onChange={(e) => console.log(e.target.value)}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(mockFn).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
  });

  test('manages edge cases such as empty data or null values', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success', data: null });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/No Data Available/i));
  });

  test('validates form inputs and displays error messages if necessary', () => {
    const mockFn = jest.fn();
    render(
      <CoreFunctionalityComponent
        onSubmit={mockFn}
        validation={(value) => value.length > 5 ? 'Too short' : null}
      />
    );
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'short' } });
    fireEvent.click(screen.getByRole('button'));
    expect(mockFn).not.toHaveBeenCalled();
    screen.getByText(/Too short/i);
  });

  test('tests keyboard navigation and focus management', () => {
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Tab' });
    expect(document.activeElement).toBe(input);
  });
});