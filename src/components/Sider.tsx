import * as React from 'react';
import { Link, navigate } from "@reach/router";

import kcsoft_logo from '@/assets/logo/logo.png';

type NavListsProps = {
  name: string;
  link: string;
  activeColor: boolean;
}

const Sider: React.FC = () => {

  const [nav, setNav] = React.useState<NavListsProps[]>([
    { name: '招新报名名单', link: 'recruitLists', activeColor: false },
    { name: '财务', link: 'finacial', activeColor: false },
  ]);

  return (
    <>
      <div className='h-screen my-4 block ml-4 shadow-lg relative w-64'>
        <div className='bg-white dark:bg-gray-800 h-full rounded-2xl'>
          {/* logo */}
          <div className='flex items-center justify-center pt-6'>
            <img src={kcsoft_logo} alt="西安科技大学校软件实验室logo" width="64" height="64" />
          </div>
          {/* 导航栏 */}
          <nav className='mt-6 flex flex-col'>
            {nav.map((item, index) => (
              <Link to={item.link} className='px-4' key={item.name}>
                <div
                  onClick={(e) => {
                    // 复制数组浅拷贝
                    let navList = [...nav];

                    navList.map((item, i) => {
                      //查找与当前一致的 div 改变背景
                      if (i === index) {
                        navList[i].activeColor = true;
                      } else {
                        navList[i].activeColor = false;
                      }

                      setNav(navList);
                    });
                  }}
                  style={{ backgroundColor: item.activeColor ? 'rgba(243, 244, 246, 1)' : '' }}
                  className='w-full font-bold text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-center
                            cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg'
                  key={item.name}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sider;