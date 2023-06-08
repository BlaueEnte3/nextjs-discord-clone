import { MessageEmbed } from "@/types/Entity";

export default function MessageEmbed({embed}:{embed:MessageEmbed}){
    return(
        <div className="h-max w-full">
           
            <div className="text-white">{embed.description}</div>
        </div>

    )
}