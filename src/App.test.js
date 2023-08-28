import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  
  const welcomeElement = screen.getByText(/welcome/i);
  expect(welcomeElement).toBeInTheDocument();
  
  const messageElement = screen.getByText(/message/i);
  expect(messageElement).toBeInTheDocument();
  
  // Add other assertions for different parts of your application
});
