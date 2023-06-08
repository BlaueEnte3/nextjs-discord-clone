export default function GuildSidebarActiveIndicator({ isActive }: { isActive: boolean }) {
    return (
        <div className="select-none flex absolute left-0 inset-y-0 items-center transition-all duration-300 ease-in-out">
            {isActive ?
                <div className="absolute left-0 inset-y-0 bg-white w-1 my-0.5 rounded-r-full transition-all duration-300 ease-in-out"></div>
                :
                <div className="group-hover:flex hidden bg-white h-4 absolute left-0 w-0.5 rounded-r-full transition-all duration-300 ease-in-out"></div>
            }
        </div>
    )
}