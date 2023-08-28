import { fireEvent, render, screen } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

test('renders LanguageSelector component', () => {
  render(<LanguageSelector />);
  
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();

  // check if English is selected by default
  expect(selectElement.value).toBe('en');

  // check if selecting another language works
  fireEvent.change(selectElement, { target: { value: 'fr' } });
  expect(selectElement.value).toBe('fr');
});

