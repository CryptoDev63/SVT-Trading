import { Dispatch, SetStateAction } from "react";
import TabMenus from "./tabmenus"

interface BuySellProps {
    mode: string;
    setMode: Dispatch<SetStateAction<string>>
}

const BuySell = ({mode, setMode}: BuySellProps) => {
    const label = mode === 'buy' ? 'Enter amount' : 'Enter amount of tokens'
    return (
        <div className="pt-8">
            <div className="w-full flex items-center justify-center mb-7">
                <TabMenus mode={mode} setMode={setMode}/>
            </div>
            <div className="flex flex-col text-[#1E1E1E] font-normal">
                <label className="text-[16px] mb-2">{label}</label>
                <div className="w-[240px] py-3 px-4 flex text-lg font-bold rounded-lg border border-[#B2B2B2] mb-2">
                    {mode && '$'}
                    <input className="outline-none w-full ml-1" />
                </div>
                <label className={`text-[16px] text-[#47A847] ${mode === 'buy' ? 'pb-7' : ''}`} >Estimate: {mode === 'buy' ? `0 Tokens` : `$ 0`}</label>
            </div>
        </div>
    )
}

export default BuySell