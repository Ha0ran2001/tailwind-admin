import React, { useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import Pagination from '@/components/Pagination';
import '@/style/table.css';

import { Infomation } from '@/types/information';

interface TableProps {
  resultList: Infomation[][];
  pageConfig: {
    totalPage: number
  }
}

const Thead = ['学号', '学院', '专业', '电话号码', '操作'];

const Table: React.FC<TableProps> = ({ resultList, pageConfig }) => {

  const [List, setList] = useState<Infomation[]>(null!); // 信息列表
  const [isOpen, setIsOpen] = useState(false);
  const [xh, setXh] = useState(''); // 学号

  const getCurrentPage = (currentpage: number) => {
    console.log(resultList[0]);
    setList(resultList[currentpage - 1]);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xs p-6 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 text-gray-900"
                >
                  确认删除？！
                </Dialog.Title>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-bold text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600"
                    onClick={
                      async () => {
                        let res = await axios.get(`deleteOne/?xh=${xh}`);
                        console.log(res);
                        setIsOpen(false);
                        location.reload();
                      }}
                  >
                    确认
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <div className='flex flex-col items-center space-y-4'>
        <table className='table text-gray-400 border-separate space-y-6'>
          <thead className='bg-white dark:bg-gray-800 text-gray-500'>
            <tr>
              <th className='p-3'>姓名</th>
              {Thead.map(item => (
                <th key={item} className='p-3 text-left'>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {List && List.map((item, index) => (
              <tr className='bg-white dark:bg-gray-800' key={index}>
                <td className='p-3'>{item.name}</td>
                <td className='p-3'>{item.xh}</td>
                <td className='p-3'>{item.college}</td>
                <td className='p-3'>{item.major}</td>
                <td className='p-3'>{item.phone}</td>
                <td
                  className='p-3 cursor-pointer hover:text-red-600 hover:font-bold'
                  onClick={() => {
                    setXh(item.xh);
                    setIsOpen(true);
                  }}>删除</td>

              </tr>
            ))}
          </tbody>
        </table>
        {pageConfig && <Pagination pageCallbackFn={getCurrentPage} pageConfig={pageConfig} />}
      </div>
    </>
  )
}

export default Table;