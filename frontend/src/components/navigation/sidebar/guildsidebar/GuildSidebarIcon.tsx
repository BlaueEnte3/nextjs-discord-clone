'use client'

import { Guild } from "@/types/Entity"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import GuildSidebarActiveIndicator from "./GuildSidebarActiveIndicator"
export default function GuildSidebarIcon({ guild }: { guild: Guild }) {

    const pathName = usePathname()
    const isActiveGuild: boolean = pathName.includes(guild._id)
    return (
        <div className="group relative w-full flex flex-col items-center">
            <Link href={`/channels/${guild._id}`}>
                <div className="cursor-pointer">
                    <Image src={guild.iconURL} alt={guild.name} width={48} height={48} className={`${isActiveGuild ? "rounded-lg" : "rounded-full"}`} />
                </div>
            </Link>
            <GuildSidebarActiveIndicator isActive={isActiveGuild} />

        </div>
    )
}