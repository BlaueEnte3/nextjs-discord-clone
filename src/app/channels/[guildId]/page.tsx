export default async function GuildPage({ params: { guildId } }: { params: { guildId: any } }) {
    return (
        <div>{guildId}</div>
    )
}