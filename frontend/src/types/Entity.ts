// very basic types atm
export interface Guild {
  _id: string;
  name: string;
  ownerId: string;
  iconURL: string;
  memberCount: number;
  systemChannelId: string;
}

export interface Channel {
  _id: string;
  name: string;
  guildId: string;
  type: ChannelTypes;
}

export type ChannelTypes = "VOICE" | "TEXT";

export interface Message {
  _id: string;
  channelId: string;
  guildId: string;
  authorId: string;
  content: string;
  embed:MessageEmbed
}
export interface MessageEmbed {
  title: string;
  description: string;
  color: string;
  footer:string
  iconURL:string
}

export interface User {
  _id: string;
  avatarURL: string;
  name: string;
  status: StatusType;
  guildIds: string[];
}

export type StatusType = "ONLINE" | "IDLE" | "OFFLINE";
