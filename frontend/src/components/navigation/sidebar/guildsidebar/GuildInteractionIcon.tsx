'use client'

import { usePathname, useRouter } from "next/navigation";
import GuildSidebarActiveIndicator from "./GuildSidebarActiveIndicator";

export default function GuildInteractionIcon({ children, onInteraction, href }: { children: React.ReactNode, onInteraction?: () => void, href?: string }) {
    const pathName = usePathname()
    const router = useRouter()
    const isActive = href ? pathName.includes(href) : false

    const onClick = () => {
        console.log("c")
        if (onInteraction)
            onInteraction()
        else if (href)
            router.replace(href, {})

    }
    return (
        <div className="relative w-full">
            <div onClick={onClick} className="cursor-pointer w-12 h-12 rounded-full mx-auto flex justify-center items-center text-red-500 bg-brand-primary">
                {children}
            </div>
            <GuildSidebarActiveIndicator isActive={isActive} />
        </div>
    )
}
