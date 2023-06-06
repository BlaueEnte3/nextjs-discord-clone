import { PageParam } from "@/types/Router";

export default function ChannelPage({ params: { guildId, channelId } }: { params: { guildId: PageParam, channelId: PageParam } }) {
    return (
        <div>{guildId}:{channelId}</div>
    )
}