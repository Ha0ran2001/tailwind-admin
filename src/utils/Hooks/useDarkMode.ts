import * as React from 'react';


const useDarkMode = (): React.Dispatch<React.SetStateAction<string>>[] => {

  const [theme, setTheme] = React.useState<any>(localStorage.theme || 'light');

  const colorTheme = theme === 'light' ? 'dark' : 'light';

  React.useEffect(() => {
    const root = window.document.documentElement;
    localStorage.theme = theme;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

  }, [theme]);

  return [theme, setTheme];
}

export default useDarkMode;