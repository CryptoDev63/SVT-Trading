import { ConnectButton } from '@rainbow-me/rainbowkit';
import Logo from "./logo"
import { useRouter, usePathname } from 'next/navigation';

const NavLinks = [
    {
        name: "home",
        url: "https://sportvalue.network/",
    },
    {
        name: "market",
        url: "/market",
    },
    {
        name: "rank",
        url: "https://sportvalue.network/rank",
    },
    {
        name: "portfolio",
        url: "/portfolio",
    },
    {
        name: "documents",
        url: "https://sportvalue.network/documents",
    },
]

const Navbar = () => {
    const path =  usePathname()
    const router = useRouter()

    const handleRedirect = (path: string) => {
        // router.push(path)
    }

    return (
        <header className='flex h-[70px] justify-between px-[56px] items-center bg-[#08401A]'>
            <Logo />
            <div className='flex w-[610px] justify-between items-center'>
                {NavLinks.map((link, index) => {
                    const active = path === link.url
                    return (
                        <div className={`flex flex-col h-[70px] min-w-[115px] text-[16px] ${active ? 'font-extrabold' : ''} text-[#CEDDD9] items-center justify-center cursor-pointer`} key={`${link}_${index}`} onClick={() => handleRedirect(link.url)}>
                            <label className={`${active ? 'pb-[18px]' : ''} py-6 uppercase cursor-pointer`}>{link.name}</label>
                            <div className='h-[6px] w-full bg-gradient-to-r from-[#009694] to-[#65F53D] ' />
                        </div>
                    )
                })}
            </div>
            <ConnectButton />
        </header>
    )
}

export default Navbar