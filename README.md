# tailwind-admin

## 开启了 darkmode，设置为 class 手动切换
```js
useDarkMode.tsx


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
```
#### 使用：

```js
const [theme, setTheme] = useDarkMode();

// 设置 light 的按钮
onClick={() => setTheme('light')} 

// 设置 dark 的按钮
onClick={() => setTheme('dark')}

// 使用
<div dark: ></div>
```

## Reach Router 中使用 Typescript 会报 没有path这个属性

### 解决：
https://github.com/reach/router/issues/141#issuecomment-416746934
