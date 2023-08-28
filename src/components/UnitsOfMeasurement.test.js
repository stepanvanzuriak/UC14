import { render, screen } from '@testing-library/react';
import UnitsOfMeasurement from './UnitsOfMeasurement';

test('renders UnitsOfMeasurement component', () => {
  render(<UnitsOfMeasurement />);
  
  const inches = screen.getByText(/inches/i);
  expect(inches).toBeInTheDocument();
  
  const centimeters = screen.getByText(/centimeters/i);
  expect(centimeters).toBeInTheDocument();
  
  const pounds = screen.getByText(/pounds/i);
  expect(pounds).toBeInTheDocument();
  
  const kilograms = screen.getByText(/kilograms/i);
  expect(kilograms).toBeInTheDocument();
  
  const liters = screen.getByText(/liters/i);
  expect(liters).toBeInTheDocument();
  
  const ounces = screen.getByText(/ounces/i);
  expect(ounces).toBeInTheDocument();
});
