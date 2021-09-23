import * as React from 'react';
import useDarkMode from '@/utils/Hooks/useDarkMode';

import avatar from '@/assets/logo/logo.png';

const Header: React.FC = () => {
  const [theme, setTheme] = useDarkMode();

  return (
    <header className='w-full shadow-lg bg-white dark:text-white dark:bg-gray-800 items-center h-16 rounded-2xl z-40 flex justify-between px-4'>
      {/* 切换暗黑和亮模式 */}
      <div className='rounded-full bg-gray-200 dark:bg-gray-900 p-1 flex'>
        <div className='px-3 py-1 bg-gray-300 dark:bg-transparent rounded-full cursor-pointer' onClick={() => setTheme('light')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div className='px-3 py-1 dark:bg-gray-700 rounded-full cursor-pointer' onClick={() => setTheme('dark')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>

      {/* profile */}
      <div className='flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-full cursor-pointer'>
        <div className='flex items-center justify-center space-x-1'>
          <img src={avatar} alt="avatar" width="36" />
          <span className='font-bold'>XUST</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </div>
    </header>
  )
}

export default Header;