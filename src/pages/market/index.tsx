import type { NextPage } from 'next';
import Table from '../../components/table';
import Pagination from '../../components/pagination';
import Search from '../../components/search';
import { PlayerDatas } from '../../assets/constant';

const Market: NextPage = () => {
    return (
        <div className='max-w-[1328px] m-auto mt-6 '>
            <div className='mb-1 w-full flex justify-between items-center'>
                <label className='font-light text-[40px]'>Players market</label>
                <Search />
            </div>
            <Table data={PlayerDatas} />
            <Pagination />
        </div>
    );
};

export default Market;
