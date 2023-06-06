'use client'

import TextChannel from "@/components/channel/TextChannel";
import { useEffect } from "react";

export default function ChannelPage({ params: { guildId, channelId } }: { params: { guildId: string, channelId: string } }) {

  
    return (
        <TextChannel/>
    )
}