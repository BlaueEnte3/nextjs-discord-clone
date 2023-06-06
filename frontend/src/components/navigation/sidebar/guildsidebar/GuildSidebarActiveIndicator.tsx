export default function GuildSidebarActiveIndicator({ isActive }: { isActive: boolean }) {
    return (
        <div className="flex absolute left-0 inset-y-0 items-center">
            {isActive ?
                <div className="absolute left-0 inset-y-0 bg-black w-1 my-1 rounded-r-full"></div>
                :
                <div className="bg-black h-6 absolute left-0 w-1 rounded-r-full"></div>
            }
        </div>
    )
}