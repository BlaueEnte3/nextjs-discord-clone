import { Channel } from "@/types/Entity";

export default function SidebarChannel({channel}:{channel:Channel}){
    return(
        <div className="flex items-center px-3 py-1.5 hover:bg-brand-primary cursor-pointer">
            {channel.name}
        </div>
    )
}