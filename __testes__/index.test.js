import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import ButtonDarkTheme from './../src/app/components/buttonDarkTheme';

window.matchMedia = () => {
  return {
    matches: false,
    addListener: () => { },
    removeListener: () => { },
  };
};

test('toggling dark mode', () => {
  const { container } = render(
    <ThemeProvider>
      <ButtonDarkTheme />
    </ThemeProvider>
  );

  const button = container.querySelector('.flex');
  expect(button).toBeTruthy();

  fireEvent.click(button);
});

