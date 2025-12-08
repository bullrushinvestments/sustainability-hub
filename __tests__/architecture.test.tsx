import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchDesignData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockFetchDesignData = (data?: any) => {
    return jest.fn().mockResolvedValue(data);
  };

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    await render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays data when fetched successfully', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/sample design/i)).toBeInTheDocument();
  });

  it('displays error message when data fetching fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (fetchDesignData as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/failed to fetch data/i)).toBeInTheDocument();
  });

  it('handles user interaction with design elements', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/sample design/i));
    expect(await screen.findByText(/selected sample design/i)).toBeInTheDocument();
  });

  it('tests accessibility features', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    expect(screen.getByText(/sample design/i)).toHaveAttribute('aria-label', /design element/i);
  });

  it('tests loading state when data is being fetched', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  it('tests edge cases when no data is available', async () => {
    const mockData = null;
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchDesignData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockFetchDesignData = (data?: any) => {
    return jest.fn().mockResolvedValue(data);
  };

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    await render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays data when fetched successfully', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/sample design/i)).toBeInTheDocument();
  });

  it('displays error message when data fetching fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (fetchDesignData as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/failed to fetch data/i)).toBeInTheDocument();
  });

  it('handles user interaction with design elements', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/sample design/i));
    expect(await screen.findByText(/selected sample design/i)).toBeInTheDocument();
  });

  it('tests accessibility features', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    expect(screen.getByText(/sample design/i)).toHaveAttribute('aria-label', /design element/i);
  });

  it('tests loading state when data is being fetched', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  it('tests edge cases when no data is available', async () => {
    const mockData = null;
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);

    await render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
});