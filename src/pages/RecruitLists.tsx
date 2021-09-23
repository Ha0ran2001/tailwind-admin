import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import Table from '@/components/Table';
import Search from '@/components/Search';

import axios from 'axios';
axios.defaults.baseURL = 'http://39.101.65.80:8081/';

import { Infomation } from '../types/information';

const RecruitLists: React.FC<RouteComponentProps> = () => {

  const [resultList, setResultList] = React.useState<Infomation[][]>(null!);
  const [pageConfig, setPageConfig] = React.useState({ totalPage: 0 });

  let result: Infomation[][] = [];

  // 获取数据
  const getInfo = async () => {

    let res = await axios.get('selectAll');

    let data = res.data.data;

    const chunk = 10; // 每页展示的数据条数

    // 请求过来的数据分成 chunk 个数据为一个数组的数组
    for (let i = 0; i < data.length; i += chunk) {
      result.push(data.slice(i, i + chunk));
    }
    console.log('result的长度', result.length);

    setPageConfig({ totalPage: result.length });
    setResultList(result);

  }
  React.useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      {resultList && <Table resultList={resultList} pageConfig={pageConfig} />}
    </>
  )
}

export default RecruitLists;