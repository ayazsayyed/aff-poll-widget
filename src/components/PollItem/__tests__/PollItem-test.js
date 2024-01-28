import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PollItem from '..';

// Mock data for testing
const mockData = {
    index: 0,
    activeOption: 0,
    itemKey: 'key-123',
    option: 'Option 1',
    handleVote: jest.fn(),
    results: [10, 5, 3], // Mock results array
    dataWidgetId: 'widget-123',
};

test('PollItem renders correctly', () => {
    render(<PollItem {...mockData} />);
    const radioInput = screen.getByText('Option 1');
    expect(radioInput).toBeInTheDocument();
});

test('PollItem highlights active option correctly', () => {
    const { container } = render(<PollItem {...mockData} />);
    const optionContainer = container.querySelector('.option');
    expect(optionContainer).toHaveClass('active');
});

test('PollItem handles click event', () => {
    render(<PollItem {...mockData} />);
    const radioInput = screen.getByText('Option 1');
    fireEvent.click(radioInput);
    expect(mockData.handleVote).toHaveBeenCalledWith(0);
});
