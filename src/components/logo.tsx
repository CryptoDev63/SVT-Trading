import Image from "next/image"
import LogoImg from "../assets/images/logo.svg"

const Logo = () => {
    return (
        <Image width={99} height={35.86} src={LogoImg.src} alt="logo" />
    )
}

export default Logo