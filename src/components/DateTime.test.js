import { render, screen } from '@testing-library/react';
import DateTime from './DateTime';

test('renders DateTime component', () => {
  render(<DateTime />);
  const currentDate = screen.getByText(/current_date_short/i);
  expect(currentDate).toBeInTheDocument();
});
