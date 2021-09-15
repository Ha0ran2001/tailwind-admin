import * as React from 'react'

import Header from './Header';
import RecruitLists from '../pages/RecruitLists';

const Content: React.FC = () => {
  return (
    <div className='flex flex-col w-full p-4 space-y-4'>
      <Header />
      <div className='overflow-auto h-screen pb-24 pt-0 pr-0 dark:bg-gray-900'>
        <div className='flex items-center justify-center py-10'>
          <RecruitLists />
        </div>
      </div>
    </div>
  )
}
export default Content;