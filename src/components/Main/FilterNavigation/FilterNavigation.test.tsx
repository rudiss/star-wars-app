// FilterNavigation.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterNavigation from './FilterNavigation';

describe('FilterNavigation', () => {
  // Mock the onSelectFilter function
  const mockOnSelectFilter = jest.fn();

  // Helper function to render the component before each test
  const renderComponent = () =>
    render(<FilterNavigation onSelectFilter={mockOnSelectFilter} />);

  beforeEach(() => {
    // Clear all information stored in the mock function
    mockOnSelectFilter.mockClear();
  });

  test('renders FilterNavigation with default option selected', () => {
    renderComponent();
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue('All');
  });

  test('calls onSelectFilter with the selected filter when a new option is selected', () => {
    renderComponent();
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'Planets' } });
    expect(mockOnSelectFilter).toHaveBeenCalledWith('Planets');
    expect(selectElement).toHaveValue('Planets');
  });

  test('resets to "All" when "Clear All" button is clicked', () => {
    renderComponent();
    const clearAllButton = screen.getByRole('button', { name: 'Clear All' });
    fireEvent.click(clearAllButton);
    expect(mockOnSelectFilter).toHaveBeenCalledWith('All');
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue('All');
  });
});
