// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockWave title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockWave/i);
    expect(titleElement).toBeInTheDocument();
});
