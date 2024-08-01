import Image from "next/image"
import SearchImg from "../assets/images/search.svg"

const Search = () => {
    return (
        <div className="flex items-center w-[350px] h-[44px] border rounded-full pl-3 pr-5">
            <Image className="mr-2" width={20} height={20} src={SearchImg.src} alt="search" />
            <input className="outline-none w-full bg-transparent text-sm font-semibold text-[#08401A]" placeholder="SEARCH" />
        </div>
    )
}

export default Search