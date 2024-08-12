import Image from "next/image";
import { PlayerInfo } from "./table";
import Trade from "./trade";
import { useState } from "react";

interface DataItemProps {
    player: PlayerInfo;
    showToken?: boolean;
}

const DataItem = ({player, showToken}: DataItemProps ) => {
    const [showTrade, setShowTrade] = useState(false)

    return (
        <tr className={`h-[80px] border-b border-[#00000010] ${showTrade ? 'bg-[#F9F7F7] text-[#099F8C]' : 'text-[#08401A]'}`}>
            {showToken && <th scope="row" className={`px-6 py-3 font-bold text-lg ${showTrade ? 'text-[#099F8C]' : 'text-[#105526]'}`}>
                {player.token} <span className="font-semibold text-[13px]">SVT</span>
            </th>}
            <th scope="row" className="px-6 py-3 font-bold text-lg flex items-center ">
                <Image className="mr-2 rounded-full border-[1px] border-[#099F8C] w-[64px] h-[64px]" width={64} height={50} src={`/images/avatar/${player.player}.png`} alt="avatar" />
                {player.player}
            </th>
            <th scope="row" className="px-6 py-3 font-normal text-[16px] text-[#333333]">
                {player.sport}
            </th>
            <th scope="row" className="px-6 py-3 font-normal text-[16px] text-[#333333]">
                {player.team}
            </th>
            <th scope="row" className="px-6 py-3 font-normal text-[16px] text-[#333333]">
                {player.position}
            </th>
            <th scope="row" className="px-6 py-3 font-normal text-[16px] text-[#333333]">
                {player.price}
            </th>
            <th>
                <button className={`rounded-md px-8 py-2 text-lg text-white font-semibold ${showTrade ? 'bg-[#099F8C]' : 'bg-gradient-to-r from-[#009694] to-[#65F53D]'}`} onClick={() => setShowTrade(true)}>Trade</button>
            </th>
            <th>
                <Trade opened={showTrade} setOpened={setShowTrade} player={player} />
            </th>
        </tr>
    )
}

export default DataItem