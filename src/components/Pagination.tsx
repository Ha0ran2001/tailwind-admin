
import * as React from 'react';

import '../style/pagination.css';

interface PagingProps {
  pageCallbackFn: (currentpage: number) => any;
  pageConfig: {
    totalPage: number
  }
}


const usePaging: React.FC<PagingProps> = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1); // 当前页码 
  const [groupCount, setGroupCount] = React.useState(5);   //页码分组， 显示 5 个页码其余用省略号显示
  const [startPage, setStartPage] = React.useState(1);     // 分组开始页码
  const [totalPage, setTotalPage] = React.useState(1);     // 总页数


  React.useEffect(() => {
    setTotalPage(props.pageConfig.totalPage);
    props.pageCallbackFn(currentPage);
  }, [])

  const prePageHandeler = () => {
    let currentPageIndex = currentPage;
    if (--currentPageIndex === 0) {
      return false;
    }
    pageClick(currentPageIndex);
  }

  const pageClick = (currentpage: number) => {
    const getCurrentPage = props.pageCallbackFn;
    // 当当前页码大于分组页码，使当前页前面显示两个页码
    if (currentpage >= groupCount) {
      setStartPage(currentpage - 2);
    }

    if (currentpage < groupCount) {
      setStartPage(1);
    }

    if (currentpage === 1) {
      setStartPage(1);
    }

    setCurrentPage(currentpage);

    // 将当前页码返回父组件
    getCurrentPage(currentpage);
  }

  const nextPageHandeler = () => {
    let currentPageIndex = currentPage;
    if (++currentPageIndex > totalPage) {
      return false;
    }

    pageClick(currentPageIndex);
  }


  const createPage = (): React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>[] => {
    let pages: Array<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> = [];
    // 上一页
    pages.push(<li
      className={currentPage === 1 ? 'nomore' : undefined}
      onClick={prePageHandeler} key={0}>上一页</li>);

    if (totalPage <= 10) {
      // 总页码小于10，全部显示出来
      for (let i = 1; i <= totalPage; i++) {
        pages.push(<li
          key={i}
          onClick={() => pageClick(i)}
          className={currentPage === i ? 'activePage' : undefined}>{i}</li>)
      }
    } else {
      // 总页码大于10，部分显示
      // 第一页
      pages.push(<li
        className={currentPage === 1 ? 'activePage' : undefined}
        onClick={() => pageClick(1)} > 1 </li>);

      let pageLength = 0;
      if (groupCount + startPage > totalPage) {
        pageLength = totalPage;
      } else {
        pageLength = groupCount + startPage;
      }

      // 前面省略号 （当前页码比分组页码(5)大的时候显示省略号）
      if (currentPage > groupCount) {
        pages.push(<li key={-1}>···</li>)
      }

      // 非第一页和最后一页
      for (let i = startPage; i < pageLength; i++) {
        if (i <= totalPage - 1 && i > 1) {
          pages.push(<li
            className={currentPage === i ? 'activePage' : undefined}
            key={i} onClick={() => pageClick(i)}>{i}</li>)
        }
      }

      // 后面省略号
      if (totalPage - startPage >= groupCount + 1) {
        pages.push(<li key={-2}>···</li>)
      }

      // 最后一页
      pages.push(<li
        className={currentPage === totalPage ? 'nomore' : undefined}
        onClick={() => pageClick(totalPage)}
        key={totalPage}>{totalPage}</li>)
    }

    // 下一页
    pages.push(<li
      className={currentPage === totalPage ? 'nomore' : undefined}
      onClick={nextPageHandeler}
      key={totalPage + 1}>下一页</li>)
    return pages;
  }

  let pageList = createPage();

  return (
    <ul className='page-container dark:text-white'>
      {pageList}
    </ul>
  )
}

export default usePaging;