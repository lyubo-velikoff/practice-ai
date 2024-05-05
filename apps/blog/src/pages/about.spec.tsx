// __tests__/About.test.tsx
import { render, screen } from '@testing-library/react';
import About from './about';

test('renders About page', () => {
  render(<About />);

  // Check if the title and some text exist
  screen.getByText(/about us/i);
  screen.getByText(/Our goal is to create content/i);
});
