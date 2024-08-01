import Image from "next/image"
import SortImg from "../assets/images/sort.svg"
import DataItem from "./dataItem";

const HeadItems = [
    {
        name: "my tokens",
        sort: true
    },
    {
        name: "player",
        sort: false
    },
    {
        name: "sport",
        sort: false
    },
    {
        name: "team",
        sort: false
    },
    {
        name: "position",
        sort: false
    },
    {
        name: "price",
        sort: true
    },
    {
        name: "action",
        sort: false
    },
]

export interface PlayerInfo {
    token: string;
    player: string;
    sport: string;
    team: string;
    position: string;
    price: string;
}

interface TableProps {
    data: PlayerInfo[];
    showToken?: boolean;
}

const Table = ({data, showToken = false}: TableProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md rounded-lg rounded-tr-none rounded-tl-none bg-white ">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs text-[#08401A] uppercase bg-[#DDEDE7]">
                    <tr>
                        {HeadItems.map((item, index) => {
                            if (item.name === "my tokens" && !showToken) {
                                return null
                            }
                            return (
                                <th scope="col" className="px-6 py-3" key={`${item}_${index}`}>
                                    <div className="flex items-center">
                                        {item.name}
                                        {item.sort && <a href="#">
                                            <Image className="ml-1" width={10} height={10} src={SortImg.src} alt="sort" />
                                        </a>}
                                    </div>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((player, index) => {
                        return (
                            <DataItem player={player} showToken={showToken} key={`${player}_${index}`}/>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default Table