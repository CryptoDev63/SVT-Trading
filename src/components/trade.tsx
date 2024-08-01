import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"
import CloseImg from "../assets/images/close.svg"
import { PlayerInfo } from "./table"
import BuySell from "./buysell"

interface TradeProps {
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    player: PlayerInfo
}

const Trade = ({opened, setOpened, player}: TradeProps) => {
    const [mode, setMode] = useState('')

    const handleClose = () => {
        setMode('')
        setOpened(false)
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-[#00000050] flex justify-center items-center ${opened ? '' : 'gone'}`}>
            <div className="flex flex-col w-[500px] bg-white rounded-2xl shadow-md shadow-[#00000080] p-6 items-center">
                <div className="flex w-full justify-between mb-8">
                    <label className="text-[40px] font-light text-black">Trade</label>
                    <Image className="cursor-pointer" width={20} height={20} src={CloseImg.src} alt="close" onClick={handleClose} />
                </div>
                <div className="w-full flex h-[90px] bg-[#F2F2F2] rounded-xl justify-between items-center px-3">
                    <div className="flex items-center">
                        <Image className="mr-4 rounded-full border-4 border-[#099F8C] w-[64px] h-[64px]" width={64} height={50} src={`/images/avatar/${player.player}.png`} alt="avatar" />
                        <div>
                            <div className="text-[#08401A] text-lg font-bold">{player.player}</div>
                            <div className="text-[#333333] text-lg">{player.team} <span className="mt-[-10px] font-extrabold text-2xl">.</span> {player.position}</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end items-end ">
                        <div className="uppercase text-[#08401A] text-[13px] font-semibold mb-2">Price</div>
                        <div className="text-[#47A847] text-[22px] font-bold">{player.price}</div>
                    </div>
                </div>
                { mode !== '' && <BuySell mode={mode} setMode={setMode} />}
                { mode !== 'buy' && 
                    <div className="h-8 w-fit my-7 py-1 px-5 rounded-full border border-[#E5E5EA] text-[#343A40] ">
                        <label className="text-[16px] font-normal">Current balance: <span className="font-semibold">{player.token}</span></label>
                    </div>
                }
                { mode === '' ? 
                    <div className="w-60 flex justify-between">
                        <button className="w-[110px] py-2 px-8 text-lg font-semibold text-white bg-[#099F8C] rounded-md" onClick={() => setMode('buy')}>Buy</button>
                        <button className="w-[110px] py-2 px-8 text-lg font-semibold text-white bg-[#099F8C] rounded-md" onClick={() => setMode('sell')}>Sell</button>
                    </div>
                    : mode === 'buy' ?
                    <button className="w-60 py-2 px-8 text-lg font-semibold text-white bg-[#099F8C] rounded-md disabled:bg-[#099F8C80]">Buy</button>
                    :
                    <button className="w-60 py-2 px-8 text-lg font-semibold text-white bg-[#099F8C] rounded-md disabled:bg-[#099F8C80]">Sell</button>
                }
            </div>
        </div>
    )
}

export default Trade