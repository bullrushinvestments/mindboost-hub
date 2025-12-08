import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: true, error: null });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByTestId('loading-spinner'));
  });

  test('handles errors gracefully and displays an error message', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: new Error(errorMessage) });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to fetch data/i));
  });

  test('calls external service on component mount', () => {
    const useExternalServiceMock = (useExternalService as jest.Mock);
    render(<CoreFunctionalityComponent />);
    expect(useExternalServiceMock).toHaveBeenCalledTimes(1);
  });

  test('allows user interaction with form elements and updates state accordingly', async () => {
    const inputText = 'test value';
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: inputText } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(useExternalService).toHaveBeenCalledWith(inputText));
  });

  test('ensures all form elements are accessible and have proper labels', () => {
    render(<CoreFunctionalityComponent />);
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach((input) => {
      expect(screen.getByLabelText(input.name)).toBeInTheDocument();
    });
  });

  test('validates form input before submission', async () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument());
  });

  test('displays success message after successful submission', async () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/submission successful/i)).toBeInTheDocument());
  });

  test('handles edge cases such as empty input and displays appropriate messages', async () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument());
  });

  test('ensures all interactive elements are keyboard navigable and focusable', () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(useExternalService).toHaveBeenCalled();
  });

  test('ensures all elements are compliant with accessibility standards', () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    const results = axe.run(document.body);
    return expect(results.violations.length).toBe(0);
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: true, error: null });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByTestId('loading-spinner'));
  });

  test('handles errors gracefully and displays an error message', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: new Error(errorMessage) });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to fetch data/i));
  });

  test('calls external service on component mount', () => {
    const useExternalServiceMock = (useExternalService as jest.Mock);
    render(<CoreFunctionalityComponent />);
    expect(useExternalServiceMock).toHaveBeenCalledTimes(1);
  });

  test('allows user interaction with form elements and updates state accordingly', async () => {
    const inputText = 'test value';
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: inputText } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(useExternalService).toHaveBeenCalledWith(inputText));
  });

  test('ensures all form elements are accessible and have proper labels', () => {
    render(<CoreFunctionalityComponent />);
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach((input) => {
      expect(screen.getByLabelText(input.name)).toBeInTheDocument();
    });
  });

  test('validates form input before submission', async () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument());
  });

  test('displays success message after successful submission', async () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/submission successful/i)).toBeInTheDocument());
  });

  test('handles edge cases such as empty input and displays appropriate messages', async () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument());
  });

  test('ensures all interactive elements are keyboard navigable and focusable', () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(useExternalService).toHaveBeenCalled();
  });

  test('ensures all elements are compliant with accessibility standards', () => {
    (useExternalService as jest.Mock).mockReturnValueOnce({ isLoading: false, error: null });
    render(<CoreFunctionalityComponent />);
    const results = axe.run(document.body);
    return expect(results.violations.length).toBe(0);
  });
});