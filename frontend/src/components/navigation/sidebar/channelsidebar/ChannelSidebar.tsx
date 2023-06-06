import { Channel } from "@/types/Entity";
import ChannelSidebarHeader from "./guildinfoheader/GuildInfoHeader";
import SidebarUser from "../sidebaruser/SidebarUser";
import SidebarChannel from "./sidebarchannel/SidebarChannel";


export default function ChannelSidebar() {
    const channels: Channel[] = [
        { _id: "1", name: "test", type: "TEXT" },
        { _id: "2", name: "test", type: "TEXT" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
        { _id: "3", name: "test", type: "VOICE" },
    ]

    const ChannelList = () => channels.map((channel, index) => {
        return <SidebarChannel channel={channel} />
    })
    return (
        <div className="flex flex-col w-full h-full bg-brand-secondary">
            <ChannelSidebarHeader />
            <div className="mt-2 flex flex-col flex-grow overflow-x-hidden overflow-y-scroll space-y-2 scrollbar px-2.5">
                <ChannelList />
            </div>
            <SidebarUser />
        </div>
    )
}