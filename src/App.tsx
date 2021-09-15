import * as React from 'react';

import Sider from './components/Sider';
import Content from './components/Content';
const App: React.FC = () => {
  return (
    <>
      <main className='bg-gray-100 dark:bg-gray-900 h-screen overflow-hidden relative'>
        <div className='flex items-start justify-between'>
          <Sider />
          <Content />
        </div>
      </main>
    </>
  );
}

export default App;
