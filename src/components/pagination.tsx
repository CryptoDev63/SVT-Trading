import NextImg from '../assets/images/next.svg'
import LastImg from '../assets/images/last.svg'
import Image from 'next/image'

const Pagination = () => {
    return (
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-center py-4" aria-label="Table navigation">
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a href="#" className="flex items-center justify-center bg-[#099F8C] rounded-full w-[32px] h-[32px] mr-1 text-white">1</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center bg-white rounded-full w-[30px] h-[30px] mr-1 text-[#08401A]">2</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center bg-white rounded-full w-[30px] h-[30px] mr-1 text-[#08401A]">3</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center bg-white rounded-full w-[30px] h-[30px] mr-1 text-[#08401A]">...</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center bg-white rounded-full w-[30px] h-[30px] mr-1 text-[#08401A]">19</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center bg-white rounded-full w-[30px] h-[30px] mr-1">
                        <Image width={20} height={20} src={NextImg.src} alt='next' />
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center bg-white rounded-full w-[30px] h-[30px] ">
                        <Image width={20} height={20} src={LastImg.src} alt='last' />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination