import { Message } from "@/types/Entity";

export default function MessageNode({message}:{message:Message}){
    return(
        <div>{message.content}</div>
    )
}