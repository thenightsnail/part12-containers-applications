import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Todo from './Todo';

describe('<Todo />', () => {
  it('renders without errors when status is not done', () => {
    const mockHandleComplete = jest.fn();
    const mockHandleDelete = jest.fn();

    const mockProps = {
      done: false,
      _id: "123",
      text: "Mock todo"
    }

    render(<Todo {...mockProps} onComplete={mockHandleComplete} onDelete={mockHandleDelete} />);

    expect(screen.getByText("Mock todo")).toBeInTheDocument();
    expect(screen.getByText("This todo is not done")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Set as done")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Delete"));
    expect(mockHandleDelete).toHaveBeenCalledWith(mockProps);

    fireEvent.click(screen.getByText("Set as done"));
    expect(mockHandleComplete).toHaveBeenCalledWith(mockProps);
  })

  it('renders without errors when status is done', () => {
    const mockHandleComplete = jest.fn();
    const mockHandleDelete = jest.fn();

    const mockProps = {
      done: true,
      _id: "123",
    }

    render(<Todo {...mockProps} onComplete={mockHandleComplete} onDelete={mockHandleDelete} />);

    expect(screen.getByText("This todo is done")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.queryByText("Set as done")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Delete"));
    expect(mockHandleDelete).toHaveBeenCalledWith(mockProps);
  })
})