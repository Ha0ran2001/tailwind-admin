import * as React from 'react';


const useDarkMode = (): React.Dispatch<React.SetStateAction<string>>[] => {

  const [theme, setTheme] = React.useState<any>('light');

  const colorTheme = theme === 'light' ? 'dark' : 'light';

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useDarkMode;