﻿# tailwind-admin

## 开启了 darkmode，设置为 class 手动切换
```
useDarkMode.tsx


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
```
#### 使用：

```
const [theme, setTheme] = useDarkMode();

// 设置 light 的按钮
onClick={() => setTheme('light')} 

// 设置 dark 的按钮
onClick={() => setTheme('dark')}

// 使用
<div dark: ></div>
```

