import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import Search from '../../components/search';
import Table from '../../components/table';
import Pagination from '../../components/pagination';
import { PlayerDatas } from '../../assets/constant';

const Portfolio: NextPage = () => {
    return (
        <div className='max-w-[1328px] m-auto mt-6 '>
            <div className='mb-1 w-full flex justify-between items-center'>
                <label className='font-light text-[40px]'>Portfolio: {PlayerDatas.length} players</label>
                <Search />
            </div>
            <Table data={PlayerDatas} showToken={true} />
            <Pagination />
        </div>
    );
};

export default Portfolio;
