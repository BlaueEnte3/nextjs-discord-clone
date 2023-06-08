import { Message } from "@/types/Entity";

export default function MessageNode({message}:{message:Message}){
    return(
        <div className="h-max w-full">{message.content}</div>
    )
}