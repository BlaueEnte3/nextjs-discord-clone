'use client'
import { Message } from "@/types/Entity";
import { faLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import MessageEditInput from "./MessageEditInput";
import MessageUserHeader from "./MessageUserHeader";
import MessageIcons from "./MessageIcons";

export default function MessageNode({ message }: { message: Message }) {

    const [isEditingMessage, setIsEditingMessage] = useState<boolean>(false)


    return (
        <div id={message._id} className={`group relative mt-2 p-1 px-10 cursor-pointer message flex flex-col duration-200 ease-in-out text-secondary justify-between`}>
            <div className={`flex flex-row w-full relative items-start`}>
                <Image
                    width={40}
                    height={40}
                    src="/blaueente.png"
                    className="rounded-full absolute"
                    alt=""
                />
                <div className="flex flex-col ml-2 w-full -mt-1 pl-10">
                    <MessageUserHeader />

                    {isEditingMessage ? (
                        <MessageEditInput setIsEditingMessage={setIsEditingMessage} message={message} />
                    )
                        : <>
                            {message.content.length === 0 ?
                                null
                                :
                                <div className="flex flex-col">
                                    <div
                                        onClick={() => setIsEditingMessage(true)}
                                        className="whitespace-pre-wrap select-text overflow-hidden text-secondary font-semilight text-base max-w-screen-sm"
                                        dangerouslySetInnerHTML={{ __html: message.content }}
                                    ></div>
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
            <MessageIcons/>
        </div>
    );
}