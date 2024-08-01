import Image from "next/image"
import CheckImg from "../assets/images/check.svg"
import { Dispatch, SetStateAction } from "react"

interface TabMenusProps {
    mode: string
    setMode: Dispatch<SetStateAction<string>>
}
const TabMenus = ({mode, setMode} : TabMenusProps) => {
    return (
        <div className="w-fit flex rounded-lg py-1 px-2 bg-[#DDEDE7] font-normal">
            <button className={`w-[80px] py-1 px-3 rounded-lg ${mode === 'buy' ? 'bg-[#08401A] text-white' : 'pl-7 text-[#105526]'} flex text-lg items-center `} onClick={() => setMode('buy')}>
                {mode === 'buy' && <Image width={25} height={25} src={CheckImg.src} alt="check" />}
                Buy
            </button>
            <button className={`w-[80px] py-1 px-3 rounded-lg  ${mode === 'sell' ? 'bg-[#08401A] text-white' : 'pl-7 text-[#105526]'} flex text-lg items-center`} onClick={() => setMode('sell')}>
                {mode === 'sell' && <Image width={25} height={25} src={CheckImg.src} alt="check" />}
                Sell
            </button>
        </div>
    )
}

export default TabMenus