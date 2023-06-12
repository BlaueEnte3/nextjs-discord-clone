export default function MessageInput() {

    return (
        <div className="px-10 pb-5">
            <div id="messageInput" contentEditable={true} placeholder="Test" className="whitespace-pre scrollbar focus:outline-none outline-none border-none py-2.5 px-3 bg-brand-secondary w-full max-h-96 min-h-14 overflow-y-scroll resize-none text-red-500"></div>
        </div>
    )
}