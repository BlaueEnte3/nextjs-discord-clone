import Image from "next/image";

export default function SidebarUserAvatar() {
    return (
        <div className="relative">
            <Image src="/blaueente.png" width={32} height={32} alt="BlaueEnte" className="rounded-full" />
            <div className="absolute -right-0.5 -bottom-0.5 flex items-center justify-center w-3 h-3 bg-black rounded-full">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
        </div>
    )
}