import { Guild } from "@/types/Entity"
import GuildSidebarIcon from "./guildsidebar/GuildSidebarIcon"
import GuildSidebar from "./guildsidebar/GuildSidebar"
import GuildInteractionIcon from "./guildsidebar/GuildInteractionIcon"
import ChannelSidebar from "./channelsidebar/ChannelSidebar"

export default function Sidebar() {

    return (
        <div className="flex w-80">
            <GuildSidebar />
            <div className="w-60 h-full">
                <ChannelSidebar />
            </div>
        </div>
    )
}