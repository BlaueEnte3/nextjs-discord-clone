'use client'

import { Guild } from "@/types/Entity"
import GuildSidebarIcon from "./GuildSidebarIcon"
import GuildInteractionIcon from "./GuildInteractionIcon"

export default function GuildSidebar() {
    const guilds: Guild[] = [
        { _id: "1", ownerId: "1", name: "Test", iconURL: "/blaueente.png", memberCount: 0 },
        { _id: "2", ownerId: "1", name: "Test", iconURL: "/blaueente.png", memberCount: 0 },
        { _id: "3", ownerId: "1", name: "Test", iconURL: "/blaueente.png", memberCount: 0 },
        { _id: "4", ownerId: "1", name: "Test", iconURL: "/blaueente.png", memberCount: 0 },
        { _id: "5", ownerId: "1", name: "Test", iconURL: "/blaueente.png", memberCount: 0 },
        { _id: "6", ownerId: "1", name: "Test", iconURL: "/blaueente.png", memberCount: 0 },
    ]

    const GuildList = () => guilds.map((guild, index) => {
        return <GuildSidebarIcon guild={guild} key={guild._id} />
    })
    const Divider = () => <div className="w-12 h-px bg-gray-500 mx-auto"></div>
    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-scroll items-center w-20 py-3 space-y-2">
            <GuildInteractionIcon href="/channels/me">
                x
            </GuildInteractionIcon>
            <Divider />
            <GuildList />
            {guilds.length > 0 && <Divider />}
            <GuildInteractionIcon>
                y
            </GuildInteractionIcon>
        </div>
    )
}