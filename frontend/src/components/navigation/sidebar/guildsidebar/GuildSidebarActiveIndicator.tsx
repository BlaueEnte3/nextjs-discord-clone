export default function GuildSidebarActiveIndicator({ isActive }: { isActive: boolean }) {
    return (
        <div className="flex absolute left-0 inset-y-0 items-center">
            {isActive ?
                <div className="absolute left-0 inset-y-0 bg-white w-1 my-0.5 rounded-r-full"></div>
                :
                <div className="bg-white h-4 absolute left-0 w-0.5 rounded-r-full"></div>
            }
        </div>
    )
}