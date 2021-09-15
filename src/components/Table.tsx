import * as React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://39.101.65.80:8081/';

import '../style/table.css';

const Thead = ['学号', '学院', '专业', '电话号码', '操作'];


export interface infomation {
  name: string;
  xh: string;
  college: string;
  major: string;
  phone: string;
}

const Table: React.FC = () => {
  const [info, setInfo] = React.useState<infomation[]>(null!);

  const getInfo = async () => {
    let res = await axios.get('selectAll');
    console.log(res.data);

    setInfo(res.data.data);
  }

  React.useEffect(() => {
    getInfo();
  }, []);

  const deleteOne = async (xh: string) => {
    let res = await axios.get(`deleteOne/?xh=${xh}`)
    console.log(res);
    getInfo();
  }

  return (
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
        {info && info.map((item, index) => (
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
  )
}

export default Table;