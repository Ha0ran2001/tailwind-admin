import * as React from 'react';

import axios from 'axios';
import Pagination from '../components/Pagination';
import '../style/table.css';

const Thead = ['学号', '学院', '专业', '电话号码', '操作'];


export interface Infomation {
  name: string;
  xh: string;
  college: string;
  major: string;
  phone: string;
}

interface TableProps {
  resultList: Infomation[][];
  pageConfig: {
    totalPage: number
  }
}

const Table: React.FC<TableProps> = ({ resultList, pageConfig }) => {
  const [List, setList] = React.useState<Infomation[]>(null!);

  const getCurrentPage = (currentpage: number) => {
    console.log(resultList[0]);
    setList(resultList[currentpage - 1]);
  }


  React.useEffect(() => {
    console.log('传过来的resultList ', resultList);
    console.log('穿过来的totalPage ', pageConfig);
  }, [])

  // 删除
  const deleteOne = async (xh: string) => {
    let res = await axios.get(`deleteOne/?xh=${xh}`)
    console.log(res);
    // getInfo();
  }


  return (
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
              <td className='p-3 cursor-pointer hover:text-red-600 hover:font-bold' onClick={() => deleteOne(item.xh)} >删除</td>

            </tr>
          ))}
        </tbody>
      </table>
      {pageConfig && <Pagination pageCallbackFn={getCurrentPage} pageConfig={pageConfig} />}
    </div>
  )
}

export default Table;