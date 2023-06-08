'use client'
import { Channel } from "@/types/Entity";
import { faCog, faHashtag, faUserPlus, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarChannel({ channel }: { channel: Channel }) {
    const ChannelTypeIcon = () => {
        if (channel.type === "VOICE") return <FontAwesomeIcon icon={faVolumeHigh} />
        return <FontAwesomeIcon icon={faHashtag} />
    }

    const pathName = usePathname()
    const isActive = channel.type === "TEXT" ?
        pathName.includes(`/${channel.guildId}/${channel._id}`)
        : false //check if user connected vc equals channelId

    const channelStyles = `h-10 flex items-center px-3 py-1.5 hover:bg-brand-primary cursor-pointer justify-between rounded-md ${isActive && "bg-brand-primary"}`

    const onConnect = () => {
        alert("connect")
    }
    const createInvite = () => {

    }

    const openChannelSettings = () => {

    }

    const ChannelContent = () => {
        return (
            <>
                <div className="flex items-center text-content-secondary">
                    <div className="mr-2.5 w-5 h-full flex items-center justify-center">
                        <ChannelTypeIcon />
                    </div>
                    {channel.name}
                </div>
                <div className="h-10 flex space-x-2 text-content-secondary items-center">
                    <FontAwesomeIcon onClick={() => createInvite()} icon={faUserPlus} className="text-sm" />
                    <FontAwesomeIcon onClick={() => openChannelSettings()} icon={faCog} className="text-sm" />
                </div>
            </>
        )
    }


    if (channel.type === "VOICE")

        return (
            <div onClick={() => onConnect()} className={channelStyles}>
                <ChannelContent />
            </div>
        )
    return (
        <Link href={`/channels/${channel.guildId}/${channel._id}`} className={channelStyles}>
            <ChannelContent />
        </Link>
    )
}