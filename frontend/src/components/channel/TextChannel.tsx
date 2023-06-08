
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
    for (let i = 0; i < 150; i++)
        messages.push(m)

    return (
        <div className="flex flex-col flex-auto">
            <div className="scrollbar-dark flex flex-col overflow-x-hidden overflow-y-scroll mt-1 mb-2.5">
                {messages.map((message, index) => {
                    return <MessageNode message={message} key={index} />
                })}
            </div>
            <MessageInput />
        </div>
    )
}