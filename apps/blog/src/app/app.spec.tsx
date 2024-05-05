// __tests__/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders App without crashing', () => {
  render(<App />);

  // Check if the home link exists
  screen.getByText('My Blog');

  // Check if the About link exists
  screen.getByText(/about/i);
});
