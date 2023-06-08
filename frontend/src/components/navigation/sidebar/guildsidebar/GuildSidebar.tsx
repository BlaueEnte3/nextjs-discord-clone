'use client'

import { Guild } from "@/types/Entity"
import GuildSidebarIcon from "./GuildSidebarIcon"
import GuildInteractionIcon from "./GuildInteractionIcon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faCompass, faPlus } from "@fortawesome/free-solid-svg-icons"

export default function GuildSidebar() {
    const guilds: Guild[] = [
        { _id: "1", ownerId: "1", name: "Test", iconURL: "/blaueente.png", memberCount: 0, systemChannelId: "1" },
        { _id: "2", ownerId: "1", name: "Test", iconURL: "/blaueente.png", memberCount: 0, systemChannelId: "1" },
        { _id: "3", ownerId: "1", name: "Test", iconURL: "/blaueente.png", memberCount: 0, systemChannelId: "1" },

    ]

    const GuildList = () => guilds.map((guild, index) => {
        return <GuildSidebarIcon guild={guild} key={guild._id} />
    })
    const Divider = () => <div className="w-12 min-h-[1px] bg-brand-primary mx-auto"></div>

    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-scroll invisible-scrollbar items-center w-20 py-3 space-y-2 bg-brand-dark">
            <GuildInteractionIcon href="/channels/me">
                <div className="text-brand-accent">
                    <FontAwesomeIcon icon={faCog} size="lg" />
                </div>
            </GuildInteractionIcon>
            <Divider />
            <GuildList />
            {guilds.length > 0 && <Divider />}
            <GuildInteractionIcon>
                <div className="text-brand-accent">
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                </div>
            </GuildInteractionIcon>
        </div>
    )
}