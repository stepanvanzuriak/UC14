import { render, screen } from '@testing-library/react';
import FormattedNumbers from './FormattedNumbers';

test('renders FormattedNumbers component', () => {
  render(<FormattedNumbers />);
  
  const number1 = screen.getByText(/formatted_number_1/i);
  expect(number1).toBeInTheDocument();
  
  const number2 = screen.getByText(/formatted_number_2/i);
  expect(number2).toBeInTheDocument();
  
  const number3 = screen.getByText(/formatted_number_3/i);
  expect(number3).toBeInTheDocument();
  
  const number4 = screen.getByText(/formatted_number_4/i);
  expect(number4).toBeInTheDocument();
});
