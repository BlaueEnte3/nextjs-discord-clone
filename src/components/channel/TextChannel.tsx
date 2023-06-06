
import { Message } from "@/types/Entity";
import TextChannelHeader from "./header/TextChannelHeader";
import MessageNode from "./message/MessageNode";
import MessageInput from "./message-input/MessageInput";

export default function TextChannel() {
    const m = { _id: "1", authorId: "1", content: "test", "channelId": "1", guildId: "1" }
    const messages: Message[] = [
        { _id: "1", authorId: "1", content: "test", "channelId": "1", guildId: "1" },
        { _id: "2", authorId: "1", content: "test", "channelId": "1", guildId: "1" },
        { _id: "3", authorId: "1", content: "test", "channelId": "1", guildId: "1" },
        { _id: "4", authorId: "1", content: "test", "channelId": "1", guildId: "1" },

    ]
    for (let i = 0; i < 50; i++)
        messages.push(m)
    const MessageList = () => messages.map((message, index) => {
        return <MessageNode message={message} key={index} />
    })
    return (
        <div className="relative flex flex-col flex-grow h-full">
            <TextChannelHeader />
            <div style={{height:"calc(100vh - 48px)"}} className="flex flex-col overflow-x-hidden overflow-y-scroll mt-1 mb-2.5">
                <MessageList />
            </div>
            <MessageInput />
        </div>
    )
}