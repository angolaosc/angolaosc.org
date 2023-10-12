import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import ButtonDarkTheme from './../src/app/components/buttonDarkTheme';
import LanguageSelector from './../src/app/components/languageSelector';

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
test('Verifique se o ícone "Translate" está na tela', () => {
  const { getByTestId } = render(<LanguageSelector />);
  const translateIcon = getByTestId('translate-icon');
  expect(translateIcon).toBeTruthy();
})
