import { Message } from "@/types/Entity"
import { faLaughBeam } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function MessageEditInput({ setIsEditingMessage, message }: { setIsEditingMessage: any, message: Message }) {
    const [content, setContent] = useState<string>(message.content)

    return (
        <div className="flex flex-col w-full">
            <div className="relative">
                <input
                    onKeyUp={(e) => { }}
                    autoFocus={true}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="outline-none border-none py-1 px-3 w-full bg-brand-secondary rounded-md"
                    type="text"
                    defaultValue={message.content}
                />
                <div className="cursor-pointer right-0 absolute inset-y-0 flex items-center mr-4">
                    <FontAwesomeIcon icon={faLaughBeam} className="text-content-secondary" />
                </div>
            </div>
            <div className="flex flex-row items-center space-x-2">
                <div
                    onClick={() => setIsEditingMessage(false)}
                    className="hover:underline text-content-secondary text-xs font-semilight"
                >
                    Esc to cancel
                </div>
                <div
                    onClick={() => null}
                    className="hover:underline text-brand-accent text-xs font-semilight"
                >
                    Enter to save
                </div>
            </div>
        </div>
    )
}